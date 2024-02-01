// signRoutes.js
import express from 'express';
import { createSign, getSigns, updateSign, deleteSign, getSignById } from '../controllers/signControllers.js';
import upload from '../config/s3.js'

const router = express.Router();

router.route('/')
    .post( upload.array('images'), createSign)
    .get(getSigns);   

router.route('/:id')
    .get(getSignById)
    .put(updateSign)
    .delete(deleteSign)

export default router
