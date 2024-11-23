import express from "express";
import { routing } from "./routes/routing";
import cors from 'cors'

const app = express();


app.use(cors())
app.use(express.json())
app.use('/', routing)


const ENV_PORT = Number(process.env.ENV_PORT) || 8000;
const ENV_DOMAIN = process.env.ENV_DOMAIN || `http://localhost:${ENV_PORT}`


app.listen(ENV_PORT, () => {
  console.log(`🔗 API URL: ${ENV_DOMAIN}`);
  // console.log(`💉 Health check: http://localhost:${ENV_PORT}/health`);
});