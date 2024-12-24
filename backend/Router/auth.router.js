import { Router } from "express"
import express from 'express';

const router = express.Router();
// import {restaurantBillPdf} from './controllers/restaurantBillPdfController';
// import { billPdf } from './controllers/billPdfController';
import { billdetailsController } from './controllers/billDetailsController.js';
import { signIn, register, } from './controllers/auth.controller.js';
import { viewBillListController } from "./controllers/viewBillsListController.js";
import pdfControllerEjs from './controllers/pdfControllerEjs.js';
import viewPdfController from "./controllers/viewPdfController.js";

router.post("/signin", signIn);
router.post("/register", register)
router.post("/bills/create", billdetailsController);
router.get("/bills/:id/download", pdfControllerEjs);
router.get("/bills", viewBillListController);
router.get("/bills/:id", viewPdfController);

export default router;
