import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import songRoutes from './routes/songs.route';
import votesRoute from "./routes/votes.route";
import searchRoute from "./routes/search.route";
import oauthRouter from './routes/oauth';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/votes', votesRoute);
app.use('/songs', songRoutes);
app.use('/search',searchRoute);
app.use('/oauth', oauthRouter); 

export default app;
