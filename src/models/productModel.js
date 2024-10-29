import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
   
    offerPrice: {
        type: Number,
        required: true
    },
    proCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    proSubCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory',
        required: true
    },
    proBrandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand'
    },
    proVariantTypeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VariantType'
    },
    proVariantId: [String],
    images: [{
        Image: {
            type:String,
            required: true
        },
        url:{
            type:String,
            required:true
        }
    }]
})
export default mongoose.model("Product", productSchema)