import express from 'express';
import { add, get, getAll } from '../control/order';
const router = express.Router();

router.post("/order", add);

router.get("/orders", getAll);

router.get("/order/:id", get)

module.exports = router;