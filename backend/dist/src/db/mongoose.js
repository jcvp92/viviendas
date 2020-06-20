"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../collections/user");
const property_1 = require("../collections/property");
const mongoose_1 = require("mongoose");
// la conexion del modelo a nuestra BD
exports.User = mongoose_1.model('User', user_1.userSchema);
exports.Property = mongoose_1.model('Property', property_1.propertySchema);
