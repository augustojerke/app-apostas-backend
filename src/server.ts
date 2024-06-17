import express, {Request, Response, NextFunction} from 'express';
const cors = require('cors');
import { router } from './routes';

const app = express();
app.use(express.json());
app.use(cors());

app.use(router)

app.listen(3334, () => {
    console.log("Server On - Porta: 3334");
})
