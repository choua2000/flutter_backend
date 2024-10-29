import mongoose from "mongoose";
const SubCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'], // Adding custom error message
        trim: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // This should match the model name you use when you create the Category model
        required: [true, 'Category ID is required']
    }
},{ timestamps: true });

export default mongoose.model("SubCategory", SubCategorySchema)