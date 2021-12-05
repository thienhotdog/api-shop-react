import jwt from "jsonwebtoken";
import User from "../model/user";
import expressJwt from "express-jwt"

export const signup = async (req, res) =>{
   try{
       console.log(req.body);
        const user = await new User(req.body).save();
        res.json(user);
   }catch(error){
        res.status(400).json({
            message: "đã tồn tại tài khoản"
        })
   }
}

export const signin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email,password }).exec();
    if (!user) {
       return res.status(200).json({
            msg: "Tài khoản không tồn tại"
        })
    }
   
    if(!user.authenticate(password)){
        return res.status(200).json({
             msg: "password không đúng"
         })   
    }

    const token = jwt.sign({ _id: user._id }, '123456'); // encode: 
    res.cookie('token', token, { expire: new Date() + 9999 });

    res.json({
        token,
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    });
}

export const signout = (req, res) => {
    res.clearCookie('token');
    res.json({
        msg: "Signout Successfully"
    })
}

export const requireSignin = expressJwt({ // decode
    // Mã bảo mật
    secret: '123456',
    // Thuật toán để decode token
    algorithms: ["HS256"],
    // Sau khi decode xong thì tạo ra 1 thuộc tính req.auth và gán thông tin decode
    userProperty: "auth" // req.auth
});

export const isAuth = (req, res, next) => {
    // Kiểm tra điều kiện trả về true hoặc false
    let user = req.profile && req.auth && req.profile._id == req.auth._id;
    // Nếu false ( không phải thành viên hệ thống)
    if (!user) {
        res.json({
            msg: "Access Denined"
        })
    }
    next();
}

export const isAdmin = (req, res, next) => {
    console.log(req.profile.role);
    // nếu role == 0 ( nghĩa là quyền là member thì thông báo)
    if (req.profile.role === 0) {
        return res.status(403).json({
            msg: "Bạn không có quyền truy cập"
        })
    }
    next();
}