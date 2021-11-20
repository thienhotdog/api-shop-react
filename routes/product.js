import  express  from "express";
import {list, get, add, remove, edit, filterProduct, filterProductValue} from '../control/product';

const router = express.Router();

router.get('/products', list);

router.get('/product/:id',get);

router.patch('/product/:id', edit);

router.post('/product',add);

router.delete('/product/:id',remove);

router.get('/product', filterProduct);

router.get('/productss', filterProductValue);

module.exports = router;