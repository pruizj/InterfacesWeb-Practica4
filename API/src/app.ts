import { Db } from "mongodb";
import { connectDB } from "./MongoDB";
import express from "express";

import {  status, signin, getList, postDelete,updateUser} from "./resolvers";
const bodyParser = require('body-parser');

const run = async () => {
    const db: Db = await connectDB();
    const app = express();
    app.set("db", db);
    app.use(express.json());
  
    app.use((req, res, next) => {
      next();
    });
    app.get("/status", status);
    app.post("/signin", signin);
    app.get("/getList", getList);
    app.post("/delete",postDelete);
    app.post("/editar",updateUser);
  
    await app.listen(3001);
  };
  
  try {
    run();
  } catch (e) {
    console.error(e);
  }