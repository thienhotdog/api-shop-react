import  express  from "express";
import { add, edit, get, list, remove } from '../control/category';

const router = express.Router();

router.get('/categories', list);

router.get('/category/:slug',get)
router.patch('/category/:slug', edit)


router.post('/category',add)

router.delete('/category/:slug',remove)


module.exports = router;

