"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
let validRoles = {
    values: ["ADMIN_ROLE", "USER_ROLE"],
    message: "{VALUE} it is not a valid role "
};
exports.userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "is required name"]
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: [true, "is required email"]
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "USER_ROLE",
        enum: validRoles
    }
});
exports.userSchema.plugin(mongoose_unique_validator_1.default, {
    message: "{PATH} must be unique"
});
