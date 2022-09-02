"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//! imp Routes
var admin_1 = __importDefault(require("./admin"));
var router = express_1.default.Router();
router.get('/', function (req, res, next) {
    var products = admin_1.default.products;
    //! This will use the Default Tempalting Engine
    res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' }); //! shop.pug
});
exports.default = router;
//# sourceMappingURL=shop.js.map