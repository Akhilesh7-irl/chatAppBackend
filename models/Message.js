import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    nickname:{
        type:String,
        required: true,
        },
    text:{
        type : String,
        required:true,
    },
    roomCode:{
        type : String,
        required:true,
    }
    
},{ timestamps : true});

export default mongoose.model("Message", messageSchema);