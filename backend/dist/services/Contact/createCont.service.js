"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContactService = void 0;
const data_source_1 = require("../../data-source");
const contact_entities_1 = require("../../entities/contact.entities");
const user_entitie_1 = require("../../entities/user.entitie");
const AppError_1 = require("../../errors/AppError");
const createContactService = (data, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, fullName, phone } = data;
    const ContactRepository = data_source_1.AppDataSource.getRepository(contact_entities_1.Contact);
    const UserRepository = data_source_1.AppDataSource.getRepository(user_entitie_1.User);
    const user = yield UserRepository.findOne({ where: { id: userId } });
    if (!user) {
        throw new AppError_1.AppError("User not found", 404);
    }
    const findUser = yield ContactRepository.findOne({ where: { email } });
    if (findUser) {
        throw new AppError_1.AppError("User already exists", 409);
    }
    const contact = ContactRepository.create({
        fullName,
        email,
        phone,
        user: user, // Use the user directly here
    });
    yield ContactRepository.save(contact);
    return Object.assign(Object.assign({}, contact), { user: {
            id: user.id,
            name: user.name,
            email: user.email,
            registrationDate: user.registrationDate,
        } });
});
exports.createContactService = createContactService;
