"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionRoutes = void 0;
const express_1 = require("express");
const createLogin_controller_1 = require("../controllers/Login/createLogin.controller");
const sessionRoutes = (0, express_1.Router)();
exports.sessionRoutes = sessionRoutes;
sessionRoutes.post("", createLogin_controller_1.createTokenController);
