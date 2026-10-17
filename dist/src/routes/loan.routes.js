"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loan_controller_js_1 = require("../controllers/loan.controller.js");
const router = (0, express_1.Router)();
router.get('/', loan_controller_js_1.getLabs);
router.post('/', loan_controller_js_1.createLab);
exports.default = router;
