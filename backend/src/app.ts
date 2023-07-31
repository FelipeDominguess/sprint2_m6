import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { userRoutes } from "./routers/users.routes"
import { handleAppError } from "./middlewares/haldleAppError.middleware"
import { sessionRoutes } from "./routers/login.routes"
import cors from "cors"

const app = express()

app.use(cors());

app.use(express.json())
app.use("/users", userRoutes)
app.use("/login", sessionRoutes)
app.use(handleAppError)

export default app