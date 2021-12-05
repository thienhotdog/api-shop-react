import express from 'express';
import { add, getAll } from '../control/order';
const router = express.Router();

router.post("/order", add);

router.get("/orders", getAll)

module.exports = router;