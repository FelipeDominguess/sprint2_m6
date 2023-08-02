import { Router } from "express";
import { createTokenController } from "../controllers/Login/createLogin.controller";



const sessionRoutes = Router()

sessionRoutes.post("", createTokenController)

export { sessionRoutes }