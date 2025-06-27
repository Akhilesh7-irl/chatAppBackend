import { nanoid } from "nanoid";
import Room from "../models/Room.js";

export const createRoom = async (req,res)=>{
    try {
        const {roomName} = req.body;
        const roomCode = nanoid(6);

        const newRoom = await Room.create({roomCode, roomName})

        res.status(201).json({success:true , roomCode})
    } catch (error) {
        console.error(error.message)
        res.status(500).json({success:false , message: error.message})
    }
}

export const checkRoom = async (req,res)=>{
    try {
        const room = await Room.findOne({roomCode : req.params.code});

        if(!room){
            return res.status(404).json({success:false , message: "Room not found"})

        }
        res.json({success:true , room})

    } catch (error) {
        res.status(500).json({success:false , message :"server error"})
    }
}