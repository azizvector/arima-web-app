import { pool } from "@/config/mysql-conn";
import { isEmpty } from "lodash";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return await saveForecast(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const saveForecast = async (req, res) => {
  try {
    const { forecasts } = req.body;
    if (isEmpty(forecasts)) return res.status(400).send("Tidak ada hasil");
    const sql = "INSERT INTO forecast (summary_id, date, actual, prediction) VALUES ?"
    const forecastArray = forecasts.map(o => [o.summary_id, o.date, o.actual, o.prediction])
    const result = await pool.query(sql, [forecastArray]);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
