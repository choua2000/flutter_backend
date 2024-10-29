import mongoose from "mongoose";
const posterSchema = new mongoose.Schema({
    posterName: {
        type: String,
        required: true,
        trim: true
      },
      imageUrl: {
        type: String,
        required: true
      }
    }, {
      timestamps: true 
    });

export default mongoose.model("Poster", posterSchema)