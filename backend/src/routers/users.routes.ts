import { Router } from "express";
import { createUserController } from "../controllers/users.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest } from "../schemas/users.schema";
import { getAllUsersController } from "../controllers/getAllusers.controller";
import { updateUserController } from "../controllers/updateUser.controller";
import { deleteUserController } from "../controllers/deleteUser.controller";
import { createContactController } from "../controllers/Contact/contact.controller";
import { getAllContactsController } from "../controllers/Contact/contactGetAll.controller";
import { deleteContactController } from "../controllers/Contact/contactDelete.controller";
import { updateContactController } from "../controllers/Contact/contactUpdate.controller";


const userRoutes = Router()

userRoutes.post("", ensureDataIsValid(userSchemaRequest), createUserController)
userRoutes.get("",getAllUsersController)
userRoutes.patch("/:id",updateUserController)
userRoutes.delete("/:id",deleteUserController)


userRoutes.post("/contact", createContactController )
userRoutes.get("/contact", getAllContactsController)
userRoutes.patch("/contact/:email", updateContactController)
userRoutes.delete("/contact/:email", deleteContactController)

export { userRoutes }