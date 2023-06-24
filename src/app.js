import chalk from "chalk";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import serverConfiguration from "./config/server.json" assert {type: 'json'}

const app = express();
const router = express.Router();
const port = serverConfiguration.port;

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(
  port, () =>
  console.log(
    chalk.redBright("This app listening at"),
    chalk.whiteBright.bgRedBright.bold(`http://localhost:${port}`)
  )
);