"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FileAccess_1 = require("../models/FileAccess");
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/', function (_) {
    console.log(FileAccess_1.FileAccess.ReadWrite);
});
exports.default = router;
