import mongoose from "mongoose";
const notificatiionSchema = new mongoose.Schema({
    notificationId: {
        type: String,
        required: [true, 'Notification ID is required'],
        unique: true
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true
    },
    imageUrl: {
        type: String,
        trim: true
    },
}, { timestamps: true
});

export default mongoose.model("Notification", notificatiionSchema)