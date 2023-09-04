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
router.post("/billdetails", billdetailsController);
router.get("/viewBillList", viewBillListController);
router.get("/generatePdf/:id", pdfControllerEjs)
router.get("/viewPdf/:id", viewPdfController)

export default router;
