import express from "express"
import setupUserDB from "./config/db.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"

dotenv.config()
const app = express();

app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("Hello wrold")
})

const PORT = process.env.PORT

setupUserDB().then(
  app.listen(PORT, () => {
  console.log("Server is running at port 5000")
}))