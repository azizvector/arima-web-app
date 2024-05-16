import Layout from '@/layouts';
import { Button } from '@/components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import moment from 'moment';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { dropRight, fill, map, takeRight } from 'lodash';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },

};

export default function Dashboard() {
  const { query, push, back } = useRouter();
  const { id } = query;

  const [summary, setSummary] = useState<any>({});
  const [dataChart, setDataChart] = useState<any>({ labels: "", datasets: [] });
  const [dataChartTest, setDataChartTest] = useState<any>({ labels: "", datasets: [] });

  useEffect(() => {
    const getSummaryDetails: any = async () => {
      try {
        const { data } = await axios.get(`/api/process/${id}`);

        let length = data?.forecasts.length || 0
        let timesteps = data?.summary?.timesteps || 0
        let timestepsTest = (data?.summary?.timesteps || 0) + 5
        let arrayNull = length - timesteps
        let arrayNullTest = length - timestepsTest

        setSummary(data.summary)
        setDataChart({
          labels: map(data.forecasts, (obj) => moment(obj.date).format("YYYY-MM-DD")),
          datasets: [
            {
              label: 'Actual',
              data: map(data.forecasts, 'actual'),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              label: 'Forecast',
              data: fill(Array(arrayNull), null).concat(takeRight(map(data.forecasts, 'prediction'), timesteps)),
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
          ],
        })

        setDataChartTest({
          labels: dropRight(map(data.forecasts, (obj) => moment(obj.date).format("YYYY-MM-DD")), timesteps),
          datasets: [
            {
              label: 'Actual',
              data: dropRight(map(data.forecasts, 'actual'), timesteps + 5),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              label: 'True Value',
              data: fill(Array(arrayNullTest), null).concat(takeRight(dropRight(map(data.forecasts, 'actual'), timesteps), 5)),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              borderDash: [5, 5],
            },
            {
              label: 'Forecast',
              data: dropRight(map(data.forecasts, 'prediction'), 5),
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
          ],
        })
      } catch (error: any) {
        console.log('error: ', error);
      }
    }
    getSummaryDetails();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/process/${id}`);
      push("/processing");
    } catch (error: any) {
      console.log('error: ', error);
    }
  };

  return (
    <div className="grid gap-11">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-3xl text-[#464E5F] font-semibold uppercase">
          Detail ARIMA
        </h3>
        <div className="flex items-center justify-between gap-4 ml-4">
          <Button
            title="Kembali"
            color="secondary"
            onClick={() => back()}
          />
          <Button
            title="Hapus"
            color="danger"
            onClick={handleDelete}
          />
        </div>
      </div>
      <div className="grid gap-11">
        <div className="col-span-1">
          <div className="text-[#464E5F] bg-gray-50 py-9 px-8 rounded-xl space-y-3">
            <span className="text-lg font-semibold">Catatan!</span>
            <div className="space-y-1.5">
              <span className="font-medium">Root Mean Square Error (RMSE)</span>
              <div>RMSE digunakan untuk mengukur seberapa baik model ARIMA memprediksi data deret waktu. Semakin kecil RMSE, semakin baik model memprediksi data.</div>
            </div>
            <div className="space-y-1.5">
              <span className="font-medium">Mean Absolute Percentage Error (MAPE)</span>
              <div>MAPE mengukur kesalahan relatif dari model ARIMA dalam memprediksi data deret waktu. MAPE dinyatakan sebagai persentase dari rata-rata nilai aktual. Semakin kecil nilai MAPE, semakin baik model memprediksi data.</div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-white py-9 px-8 rounded-xl shadow-[0px_0px_20px_rgba(56,71,109,0.03)]">
            <div className="flex flex-col items-start justify-between gap-4">
              <h3 className="mb-6 text-xl text-[#464E5F] font-semibold uppercase">
                Information
              </h3>
              <div className="grid grid-cols-3 gap-11 w-full">
                <div className="col-span-1 flex flex-col items-start gap-4">
                  <div className="space-y-1">
                    <div className="text-gray-400">
                      Tanggal Proses
                    </div>
                    <div className="text-lg text-gray-500 font-semibold">
                      {moment(summary?.processed_date).format('DD-MM-yyyy')}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-gray-400">
                      Total Data
                    </div>
                    <div className="text-lg text-gray-500 font-semibold">
                      {summary?.total_order}
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col items-start gap-4">
                  <div className="space-y-1">
                    <div className="text-gray-400">
                      P
                    </div>
                    <div className="text-lg text-gray-500 font-semibold">
                      {summary?.p}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-gray-400">
                      D
                    </div>
                    <div className="text-lg text-gray-500 font-semibold">
                      {summary?.d}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-gray-400">
                      Q
                    </div>
                    <div className="text-lg text-gray-500 font-semibold">
                      {summary?.q}
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col items-start gap-4">
                  <div className="space-y-1">
                    <div className="text-gray-400">
                      Timesteps
                    </div>
                    <div className="text-lg text-gray-500 font-semibold">
                      {summary?.timesteps}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-gray-400">
                      RMSE
                    </div>
                    <div className="text-lg text-gray-500 font-semibold">
                      {summary?.rmse}%
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-gray-400">
                      Mape
                    </div>
                    <div className="text-lg text-gray-500 font-semibold">
                      {summary?.mape}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="h-full bg-white py-9 px-8 rounded-xl shadow-[0px_0px_20px_rgba(56,71,109,0.03)]">
            <div className="flex flex-col">
              <h3 className="mb-6 text-xl text-[#464E5F] font-semibold uppercase">
                {summary?.timesteps} steps forecast
              </h3>
            </div>
            <div className="flex flex-col">
              <Line options={options} data={dataChart} />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="h-full bg-white py-9 px-8 rounded-xl shadow-[0px_0px_20px_rgba(56,71,109,0.03)]">
            <div className="flex flex-col">
              <h3 className="mb-6 text-xl text-[#464E5F] font-semibold uppercase">
                5 steps test
              </h3>
            </div>
            <div className="flex flex-col">
              <Line options={options} data={dataChartTest} />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

Dashboard.getLayout = (page: any) => <Layout>{page}</Layout>;