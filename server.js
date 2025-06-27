import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import roomRoutes from "./routes/roomRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import http from "http";
import { Server} from 'socket.io'
import { socketHandler } from "./sockets/index.js"


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/room" , roomRoutes);
app.use("/room", messageRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err.message));

const server = http.createServer(app);
const io = new Server(server , {
    cors:{
        origin:"*"
    }                   
})

socketHandler(io);




const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));