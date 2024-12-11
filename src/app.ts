import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

export default app;