import express from "express"
import setupUserDB from "./config/db.js";

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello wrold")
})



setupUserDB().then(
  app.listen(5000, () => {
  console.log("Server is running at port 5000")
}))