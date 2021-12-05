import Order from "../model/order";


export const getAll = async (req,res) =>{
    const order = await Order.find({}).sort({ createAt: -1 }).exec();
    res.json(order);
}
export const get = async (req,res) =>{
    const order = await Order.find({ _id: req.params.id }).exec();
    res.json(order)
}

export const add = async (req,res) =>{
    try {
        console.log(req.body);
        const order = await new Order(req.body).save();
        // console.log();
        res.json(order);
    } catch (error) {
        // console.log('err', err);
        res.status(400).json({
            error: "Create order failed"
        })
    }
}