import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { POSTGRES_CONNECTION_STRING } from "./config.js";
import pkg from "pg";

const cnn = "postgresql://postgres:postgres@localhost:5432/postgres";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

const { Client } = pkg;
const client = new Client({
  host: "127.0.0.1",
  port: "5432",
  user: "postgres",
  password: "postgres",
  database: "tiktok_management",
});
client.connect();

app.get("/test-stock",async (req, res) => {
    const stockQuery = await client.query("select * from stock");
    await client.end()
  res.send(stockQuery.rows[0]);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
