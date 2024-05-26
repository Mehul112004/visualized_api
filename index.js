import mongoose from "mongoose";
import express from "express";
import { DataModel } from "./model.js";
import data from "./data.json" assert {type:'json'}

const app = express();

const test =[]

mongoose
  .connect(
    "mongodb+srv://mehulbohra11:b1nRLDNd9UmTbMgZ@datacluster.wv2kbyx.mongodb.net/?retryWrites=true&w=majority&appName=dataCluster"
  )
  .then(() => {
    console.log("Connected to MongoDB!!");
    console.log("Starting the server now.");
    app.listen(3000, (err) => {
      if (err) throw err;
      console.log("The server is running on port http://localhost:3000");
    });
    app.get("/getData", async (req, res) => {
      const dataPoints = await DataModel.find()
      console.log(dataPoints.length);
      res.send(dataPoints)
    });
  })
  .catch((err) => {
    console.log("ERROR in MongoDB Connection", err);
  });
