import express from "express";

import { createRoom, checkRoom } from "../controllers/roomController.js";

const router = express.Router();

router.post("/create" , createRoom)
router.get("/:code/check" , checkRoom)

export default router;