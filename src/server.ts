import express, {Express} from "express";
import cors from "cors"
import {StartUpConfig, StartUpParse} from "./utils/parsers/start-up-parse";

const APIPrefix: String = "/api";
const app: Express = express();
app.use(express.json());
app.use(cors());

const startUpConfig: StartUpConfig = StartUpParse.getStartUpConfig();
const PORT: number = startUpConfig.PORT;

app.listen(PORT, (err: void | Error): void => {
    err
        ? console.log(err)
        : console.log(`Listening ${PORT}`);
});