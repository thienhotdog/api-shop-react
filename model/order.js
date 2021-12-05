import  mongoose  from "mongoose";
const { ObjectId } = mongoose.Schema;
const orderSchema = new mongoose.Schema({
    products: {
        type: Array,
        required: true,
    },
    amount:{
        type: Number,
        required: true,
    },
    status:{
        type: String
    },
    address:{
        type:String
    },
    name:{
        type:String
    },
    userId: {
         type: ObjectId,
          ref: 'User'
    }
}, { timestamps: true })

export default mongoose.model('Order', orderSchema)