"use strict";
// ../schemas/users.schema.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactSchemaResponse = exports.contactSchema = exports.userSchemaResponse = exports.userSchemaRequest = exports.userSchema = void 0;
const zod_1 = require("zod");
const userSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
    registrationDate: zod_1.z.date(),
});
exports.userSchema = userSchema;
const userSchemaRequest = userSchema.omit({
    id: true,
    registrationDate: true,
});
exports.userSchemaRequest = userSchemaRequest;
const userSchemaResponse = userSchema.omit({
    password: true,
});
exports.userSchemaResponse = userSchemaResponse;
const contactSchema = zod_1.z.object({
    fullName: zod_1.z.string(),
    email: zod_1.z.string().email(),
    phone: zod_1.z.string(),
    registrationDate: zod_1.z.date(),
    user: userSchemaResponse, // Include the user schema here
});
exports.contactSchema = contactSchema;
const contactSchemaResponse = contactSchema.omit({
    registrationDate: true,
});
exports.contactSchemaResponse = contactSchemaResponse;
