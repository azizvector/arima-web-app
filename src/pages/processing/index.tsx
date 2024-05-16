import { calculateMAPE, calculateRMSE, twoDecimalPlacesWithoutRound } from '@/functions';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Table, Button } from '@/components';
import { map, dropRight, last, takeRight } from 'lodash';
import Layout from '@/layouts';
import moment from 'moment';
import axios from "axios";
import * as yup from "yup";

const ARIMA = require('arima');

type FormData = yup.InferType<typeof schema>;
const schema = yup.object({
  timesteps: yup.number().transform((value) => (isNaN(value) ? undefined : value)).required("Timesteps harus diisi"),
  p: yup.number().transform((value) => (isNaN(value) ? undefined : value)).required("p harus diisi"),
  d: yup.number().transform((value) => (isNaN(value) ? undefined : value)).required("d harus diisi"),
  q: yup.number().transform((value) => (isNaN(value) ? undefined : value)).required("q harus diisi"),
}).required();

export default function Dashboard() {
  const { push } = useRouter();
  const [datas, setDatas] = useState<any[]>([]);
  const [loadingTable, setLoadingTable] = useState<boolean>(true);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: yupResolver<FormData>(schema)
  });

  const header = [
    {
      fieldId: 'index',
      label: 'No',
      width: 50
    },
    {
      fieldId: 'processed_date',
      label: 'Tanggal Proses',
      renderItem: (processed_date: string) => (<>
        {moment(processed_date).format('DD-MM-yyyy hh:mm')}
      </>),
    },
    {
      fieldId: 'timesteps',
      label: 'Timesteps',
      width: 150
    },
    {
      fieldId: 'p',
      label: 'P',
      width: 50
    },
    {
      fieldId: 'd',
      label: 'D',
      width: 50
    },
    {
      fieldId: 'q',
      label: 'Q',
      width: 50
    },
    {
      fieldId: 'total_order',
      label: 'Total Data',
      width: 120
    },
  ];

  useEffect(() => {
    getSummary();
  }, []);

  const handleRowClick = (item: any) => {
    push(`/processing/${item.summary_id}`);
  };

  const getSummary = async () => {
    setLoadingTable(true)
    try {
      const { data } = await axios.get("/api/process");
      setDatas(data)
      setLoadingTable(false)
    } catch (error: any) {
      console.log('error: ', error);
    }
  }

  const onSubmit = async (fields: FormData) => {
    await handleCalculate(fields);
    await getSummary();
  };

  const handleCalculate = async (fields: FormData) => {
    const { timesteps, p, d, q } = fields

    const { data } = await axios.get("/api/transaction")
    const dataset: any[] = map(data, 'quantity')

    const arima = new ARIMA({
      p,
      d,
      q,
      verbose: false
    }).train(dataset)
    const [pred, errors] = arima.predict(timesteps)

    const arimaPrev = new ARIMA({
      p,
      d,
      q,
      verbose: false
    }).train(dropRight(dataset, 5))
    const [predPrev, errorsPrev] = arimaPrev.predict(5)

    const rmse = calculateRMSE(takeRight(dataset, 5), predPrev);
    const mape = calculateMAPE(takeRight(dataset, 5), predPrev);

    try {
      const res = await axios.post("/api/process", {
        timesteps,
        p,
        d,
        q,
        rmse: twoDecimalPlacesWithoutRound(rmse),
        mape: twoDecimalPlacesWithoutRound(mape),
        total_order: data.length,
      })

      const dataList: any[] = data.map((obj: any, idx: number) => {
        if (idx < (data.length - predPrev.length)) {
          return {
            summary_id: res.data.summary_id,
            date: moment(obj.order_date).format("YYYY-MM-DD"),
            actual: obj.quantity,
            prediction: null
          };
        } else {
          return {
            summary_id: res.data.summary_id,
            date: moment(obj.order_date).format("YYYY-MM-DD"),
            actual: obj.quantity,
            prediction: twoDecimalPlacesWithoutRound(predPrev[idx - (data.length - predPrev.length)])
          };
        }
      });

      let lastData: any = last(data)
      const lastDate = moment(lastData.order_date);
      const predList: any[] = pred.map((obj: any, idx: number) => ({
        summary_id: res.data.summary_id,
        date: lastDate.add(idx, 'days').format("YYYY-MM-DD"),
        actual: null,
        prediction: twoDecimalPlacesWithoutRound(obj)
      }));
      await axios.post("/api/forecast", { forecasts: dataList.concat(predList) })
    } catch (error: any) {
      console.log('error: ', error);
    }
  }

  return (
    <div className="grid grid-cols-3 gap-11">
      <div className="col-span-1">
        <div className="bg-white py-9 px-8 rounded-xl shadow-[0px_0px_20px_rgba(56,71,109,0.03)]">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h3 className="text-xl text-[#464E5F] font-semibold uppercase">
              Proses ARIMA
            </h3>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Input
              mask="999"
              maskChar={null}
              type='masked'
              label="Timesteps"
              placeholder='Timesteps'
              name='timesteps'
              register={register}
              error={errors.timesteps?.message}
            />
            <Input
              mask="999"
              maskChar={null}
              type='masked'
              label="P"
              placeholder='p'
              name='p'
              register={register}
              error={errors.p?.message}
            />
            <Input
              mask="999"
              maskChar={null}
              type='masked'
              label="D"
              placeholder='d'
              name='d'
              register={register}
              error={errors.d?.message}
            />
            <Input
              mask="999"
              maskChar={null}
              type='masked'
              label="Q"
              placeholder='q'
              name='q'
              register={register}
              error={errors.q?.message}
            />
            <div className="pt-4">
              <Button
                type="submit"
                title="Proses"
                color="primary"
                loading={isSubmitting}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="col-span-2">
        <div className="bg-white py-9 px-8 rounded-xl shadow-[0px_0px_20px_rgba(56,71,109,0.03)]">
          <div className="mb-6 flex flex-col">
            <h3 className="mb-1.5 text-xl text-[#464E5F] font-semibold uppercase">
              Proses
            </h3>
            <p className="text-gray-400">
              Total {datas.length}
            </p>
          </div>
          <div className="flex flex-col">
            <div className="border border-[#BDBDBD] rounded-lg">
              <Table
                data={datas}
                headers={header}
                action={true}
                onRowClick={handleRowClick}
                loading={loadingTable}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.getLayout = (page: any) => <Layout>{page}</Layout>;