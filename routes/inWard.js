import express from "express";
import { getInWard } from '../controller/inWard.js';

const router = express.Router();

router.get('/', getInWard)

export default router;