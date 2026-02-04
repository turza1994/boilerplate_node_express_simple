import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middlewares/errorHandler.js';
import { rateLimitMiddleware } from './middlewares/rateLimit.js';
import routes from './routes/index.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(rateLimitMiddleware);

app.use('/api', routes);

app.use(errorHandler);

export { app };
