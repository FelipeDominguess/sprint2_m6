"use strict";
// services/getAllUsers.service.ts
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
exports.getAllUsersService = void 0;
const data_source_1 = require("../../src/data-source");
const user_entitie_1 = require("../../src/entities/user.entitie");
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entitie_1.User);
    const users = yield userRepository.find();
    return users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        registrationDate: user.registrationDate,
    }));
});
exports.getAllUsersService = getAllUsersService;
