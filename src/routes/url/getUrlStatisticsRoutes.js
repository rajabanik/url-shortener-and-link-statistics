"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var getUrlStats_1 = require("../../controllers/url/getUrlStats");
var router = express_1.default.Router();
router.get('/stats/:shortCode', getUrlStats_1.getUrlStatistics);
exports.default = router;
