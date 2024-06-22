"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var shortenUrlRoutes_1 = __importDefault(require("./routes/url/shortenUrlRoutes"));
var redirectUrlRoutes_1 = __importDefault(require("./routes/url/redirectUrlRoutes"));
var getUrlStatisticsRoutes_1 = __importDefault(require("./routes/url/getUrlStatisticsRoutes"));
var app = (0, express_1.default)();
//port
var PORT = process.env.PORT || 4000;
//middleware
app.use(express_1.default.json());
app.get('/', function (req, res) {
    res.send("welcome to the App");
});
app.use('/', shortenUrlRoutes_1.default);
app.use('/', redirectUrlRoutes_1.default);
app.use('/', getUrlStatisticsRoutes_1.default);
console.log("Using port: ".concat(PORT));
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
exports.default = app;
