import mongoose from "mongoose";

const signSchema = new mongoose.Schema({
    englishName: {
        type: String,
        required: true,
        trim: true
    },
    arabicName: {
        type: String,
        required: true,
        trim: true
    },
    imageURL: {
        type: String,
        required: true
    },

}, {
    timestamps: true,
});

const Sign = mongoose.model('Sign', signSchema);

export default Sign;