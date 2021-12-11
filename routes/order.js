import express from 'express';
import { add, get, getAll,edit } from '../control/order';
const router = express.Router();

router.post("/order", add);

router.get("/orders", getAll);

router.get("/order/:id", get);

router.patch("/order/:id",edit);

module.exports = router;