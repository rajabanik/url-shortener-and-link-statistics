"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var shortenUrlRoutes_1 = __importDefault(require("./routes/url/shortenUrlRoutes.cjs"));
var redirectUrlRoutes_1 = __importDefault(require("./routes/url/redirectUrlRoutes.cjs"));
var getUrlStatisticsRoutes_1 = __importDefault(require("./routes/url/getUrlStatisticsRoutes.cjs"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/',(req,res)=>{
    res.send("welcome to the App")
  })
app.use('/', shortenUrlRoutes_1.default);
app.use('/', redirectUrlRoutes_1.default);
app.use('/', getUrlStatisticsRoutes_1.default);

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
exports.default = app;
