import express from 'express';
import { isAdmin, isAuth, requireSignin } from '../control/auth';
import { get, getAll, read, remove, userById } from '../control/user';
const router = express.Router();

router.get("/users", getAll);
router.get("/user/:id",get);
router.delete("/user/:id",remove);

// Kiểm tra là admin
router.get('/user/secret/:userId', requireSignin, isAuth, isAdmin, read);


// Trả về thông tin user
router.get('/user/:userId', requireSignin, isAuth, read)
router.param('userId', userById);

module.exports = router;