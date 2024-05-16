import mysql from "serverless-mysql";

const pool: any = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: "arima_db",
  },
});

export { pool };
