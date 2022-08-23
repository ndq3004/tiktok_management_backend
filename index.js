import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { AWS_CONNECTION_STRING } from "./config.js";

import inwardRoutes from './routes/inWard.js';

const cnn = "postgresql://postgres:postgres@localhost:5432/postgres";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use('/inward', inwardRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
