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
exports.updateContactController = void 0;
const updateCont_service_1 = require("../../services/Contact/updateCont.service");
const updateContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    const { fullName, phone } = req.body;
    const updatedContact = yield (0, updateCont_service_1.updateContactService)(email, { fullName, phone });
    return res.status(200).json(updatedContact);
});
exports.updateContactController = updateContactController;
