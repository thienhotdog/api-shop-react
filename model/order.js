import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;
const orderSchema = new mongoose.Schema({
    products: {
        type: Array,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String
    },
    address: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    userId: {
        type: ObjectId,
        ref: 'User',
        required: true,
    }
}, { timestamps: true })

export default mongoose.model('Order', orderSchema)