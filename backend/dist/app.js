"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const users_routes_1 = require("./routers/users.routes");
const haldleAppError_middleware_1 = require("./middlewares/haldleAppError.middleware");
const login_routes_1 = require("./routers/login.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/users", users_routes_1.userRoutes);
app.use("/login", login_routes_1.sessionRoutes);
app.use(haldleAppError_middleware_1.handleAppError);
exports.default = app;
