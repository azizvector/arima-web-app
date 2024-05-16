import { pool } from "@/config/mysql-conn";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return await saveSummary(req, res);
    case "GET":
      return await getSummary(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const saveSummary = async (req, res) => {
  try {
    const { timesteps, p, d, q, total_order, rmse, mape } = req.body;
    const result = await pool.query("INSERT INTO summary SET ?", {
      timesteps,
      p,
      d,
      q,
      rmse,
      mape,
      total_order,
      processed_date: new Date()
    });
    return res.status(200).json({ summary_id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getSummary = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM summary ORDER BY processed_date DESC");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
