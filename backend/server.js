import express from "express"
import setupUserDB from "./config/db.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import cors from "cors"
import authRoutes from "./routes/auth.js"


dotenv.config()
const app = express();
app.use(cors())

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)

const PORT = process.env.PORT

setupUserDB().then(
  app.listen(PORT, () => {
  console.log("Server is running at port 5000")
}))