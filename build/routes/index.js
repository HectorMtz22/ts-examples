"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var User_1 = __importDefault(require("./User"));
var FileAccess_1 = __importDefault(require("./FileAccess"));
var app = express_1.default();
app.use('/user', User_1.default);
app.use('/file', FileAccess_1.default);
exports.default = app;
