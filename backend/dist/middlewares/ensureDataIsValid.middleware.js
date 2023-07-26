"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureDataIsValid = void 0;
const ensureDataIsValid = (schema) => (req, res, next) => {
    const validateDAta = schema.parse(req.body);
    req.body = validateDAta;
    return next();
};
exports.ensureDataIsValid = ensureDataIsValid;
