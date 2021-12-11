import User from "../model/user";

export const userById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id).exec(); // tìm user dựa trên ID
        req.profile = user;
        console.log("đay là user", user);
        next()
    } catch (error) {
        res.status(400).json({
            msg: 'User không tồn tại'
        })
    }

}
export const read = (req, res) => {
    const user = req.profile;

    user.hashed_password = undefined;
    user.salt = undefined;

    res.json(user);
}

export const getAll = async (req,res)=>{
    const users = await User.find({}).sort({ createAt: -1 }).exec();
    res.json(users);
}

export const get = async (req,res) =>{
    const user = await User.find({ _id: req.params.id }).exec();
    res.json(user)
}


export const remove = async (req,res) =>{
    try {
        const deleted = await User.findOneAndDelete({ _id: req.params.id });
        res.json(deleted);
    } catch (error) {
        res.status(400).send("Create deleted failed")
    }
}
