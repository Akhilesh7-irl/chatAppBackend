import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomCode:{
        type: String,
        required : true,
        unique : true,
    },
    roomName:{
        type : String ,
        default: "",
    },
}, {timestamps:true});

export default mongoose.model("Room", roomSchema)