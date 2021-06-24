"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_validator_1 = require("express-validator");
var router = express_1.default.Router();
var user = {
    name: "Hector",
    age: 18
};
router.get('/', function (_, res) {
    res.send(user);
});
router.post('/', express_validator_1.body('username').isEmail(), function (req, res) {
    var errors = express_validator_1.validationResult(req);
    console.log(errors);
    res.send("Just request");
});
exports.default = router;
