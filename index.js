import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";


import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || "https://chatappserver-k9gm.onrender.com"

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://chat-app-ochre-eta.vercel.app",
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);




server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});

app.get('/',(req,res)=>{
  res.status(200).send(`<h1 style="color:red;">CHATSERVER STARTED AT PORT AND WAITING FOR CLIENT REQUEST<h1/>`)
})