"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var redirecturl_1 = require("../../controllers/url/redirecturl.cjs");
var router = express_1.default.Router();
router.get('/:shortCode', redirecturl_1.redirectUrl);
exports.default = router;
