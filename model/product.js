import  mongoose  from "mongoose";
const { ObjectId } = mongoose.Schema;
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    img:{
        type: String,
       
    },
    desc:{
        type: String
    },
    detail:{
        type: Boolean
       
    },
    cateId: {
         type: ObjectId,
          ref: 'Category'
    }
}, { timestamps: true })

export default mongoose.model('Product', productSchema)