"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var createUrl_1 = require("../../controllers/url/createUrl.cjs");
var router = express_1.default.Router();
router.post('/shortcode', createUrl_1.shortenUrl);
exports.default = router;
