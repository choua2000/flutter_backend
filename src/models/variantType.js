import mongoose from "mongoose";
const variantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'], 
        trim: true
    },
    type: {
        type: String,
        required: [true, 'Type is required'],
        trim: true
    }
},{ timestamps: true });



export default mongoose.model("Variant", variantSchema)