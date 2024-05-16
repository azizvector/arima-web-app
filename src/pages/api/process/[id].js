import { pool } from "@/config/mysql-conn";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getSummary(req, res);
    case "DELETE":
      return await deleteSummary(req, res);
    default:
      return res.status(400).json({ message: "bad request" });
  }
}

const getSummary = async (req, res) => {
  try {
    const summary = await pool.query("SELECT * FROM summary WHERE summary_id = ?", [
      req.query.id,
    ]);
    const forecasts = await pool.query("SELECT * FROM forecast WHERE summary_id = ? ORDER BY date ASC", [
      req.query.id,
    ]);
    return res.status(200).json({ summary: summary[0], forecasts: forecasts});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteSummary = async (req, res) => {
  try {
    await pool.query("DELETE FROM forecast WHERE summary_id = ?", [req.query.id]);
    await pool.query("DELETE FROM summary WHERE summary_id = ?", [req.query.id]);
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};