import { sendMessage } from "../controllers/messageController.js";

export const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("join-room", (roomCode) => {
      socket.join(roomCode);
      console.log(`User ${socket.id} joined room ${roomCode}`);
    });

    socket.on("send-message", async ({ roomCode, nickname, text }) => {
      try {
        const savedMessage = await sendMessage({ roomCode, nickname, text });
        io.to(roomCode).emit("receive-message", savedMessage);
      } catch (err) {
        console.error("Failed to send message:", err.message);
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};
