import Product from '../model/product';

export const list = async (req,res) =>{
    const products = await Product.find({}).sort({ createAt: -1 }).exec();
    res.json(products);
}

export const get = async (req,res) =>{
    const product = await Product.find({ _id: req.params.id }).exec();
    res.json(product)
}

export const add = async (req,res) =>{
    try {
        console.log(req.body);
        const product = await new Product(req.body).save();
        // console.log();
        res.json(product);
    } catch (error) {
        // console.log('err', err);
        res.status(400).json({
            error: "Create product failed"
        })
    }
}

export const edit = async (req,res) =>{
    const { name,price,img,cateId,detail } = req.body;
   
    try {
        const product = await Product.findOneAndUpdate(
            { _id: req.params.id },
            { name, price, img, cateId,detail },
            { new: true});
            console.log(product);
        res.json(product);
    } catch (error) {
    }
}

export const filterProduct = async(req,res) =>{
    let {min, max} = req.query;
        console.log(req.query)
        const product = await Product.find({
             price: {$gte : +min, $lte: +max}
        })
        res.json(product);
}

export const filterProductValue = async(req,res) =>{
    let {name} = req.query;
    console.log(name);
    const product = await Product.find({
        name: {$regex: name}
    })
    res.json(product);
}

export const remove = async (req,res) =>{
    try {
        const deleted = await Product.findOneAndDelete({ _id: req.params.id });
        res.json(deleted);
    } catch (error) {
        res.status(400).send("Create deleted failed")
    }
}
