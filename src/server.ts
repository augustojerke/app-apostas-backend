import express, {Request, Response, NextFunction} from 'express';
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3333, () => {
    console.log("Server On");
})
