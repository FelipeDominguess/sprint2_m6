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
exports.createContactController = void 0;
const createCont_service_1 = require("../../services/Contact/createCont.service");
const createContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params; // Assuming you have the userId available in the request object
    const newContact = yield (0, createCont_service_1.createContactService)(req.body, userId);
    return res.status(201).json(newContact);
});
exports.createContactController = createContactController;
