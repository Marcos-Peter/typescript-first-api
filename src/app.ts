import express from 'express';
import dotenv from 'dotenv';
import { router } from './routes/index';
dotenv.config();

export const app = express();

app.use(express.json());

app.use('/ping', router);
