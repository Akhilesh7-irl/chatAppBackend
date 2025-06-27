import Message from "../models/Message.js"


export const getMessages = async (req,res)=>{
    try {
        const messages = await Message.find({roomCode: req.params.code}).sort({createdAt: 1})
    
        res.json({success:true , messages})
    } catch (error) {
        res.status(500).json({success: false , message:"Failed to load messages"})
    }
}

export const sendMessage = async ({roomCode , nickname , text})=>{
    try {
        const newMessage = await Message.create({roomCode,nickname,text})

        return newMessage
    } catch (error) {
        console.error("Send Message Error" , error.message);
        throw error;
    }
}