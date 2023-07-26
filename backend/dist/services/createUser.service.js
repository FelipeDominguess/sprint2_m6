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
exports.createUserService = void 0;
const bcryptjs_1 = require("bcryptjs");
const data_source_1 = require("../../src/data-source");
const user_entitie_1 = require("../../src/entities/user.entitie");
const AppError_1 = require("../../src/errors/AppError");
const createUserService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, password } = data;
    const userRepository = data_source_1.AppDataSource.getRepository(user_entitie_1.User);
    const findUser = yield userRepository.findOne({
        where: {
            email
        }
    });
    if (findUser) {
        throw new AppError_1.AppError("user already exists", 409);
    }
    const hashedPassword = yield (0, bcryptjs_1.hash)(password, 10);
    const user = userRepository.create({
        name,
        email,
        password: hashedPassword
    });
    yield userRepository.save(user);
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        registrationDate: user.registrationDate,
    };
});
exports.createUserService = createUserService;
