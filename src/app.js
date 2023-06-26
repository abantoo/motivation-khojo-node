import chalk from "chalk";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import serverConfiguration from "./config/server.json" assert {type: 'json'};
import dbConfig from './config/db.json' assert {type: 'json'};
// import router from './router/index.js'
import mongoose from "mongoose";
import PostController from "./controller/postController.js";

const uri = `mongodb+srv://${dbConfig.username}:${dbConfig.password}@${dbConfig.cluster}.${dbConfig.id}.mongodb.net/?retryWrites=true&w=majority`;


const app = express();
const router = express.Router();
const port = serverConfiguration.port;

app.use(router);

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.use("/", router);


router.get("/", PostController.getAllPosts);

router.post("/", PostController.savePost);

router.put('/', PostController.editPost);


try {
  const connection = await mongoose.connect(uri);

  if (connection) {
    app.listen(port, () =>
      console.log(
        chalk.redBright("This app listening at"),
        chalk.whiteBright.bgRedBright.bold(`http://localhost:${port}`)
      )
    );
  }
} catch (e) {
  console.log(e);
}

