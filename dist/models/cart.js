"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../utils/database")); //! imp Database Connection Pool sequelize
class Cart extends sequelize_1.Model {
}
Cart.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
}, {
    // Other model options go here
    sequelize: database_1.default,
    modelName: 'cart', // We need to choose the model name
});
// the defined model is the class itself
console.log(Cart === database_1.default.models.cart); // true
exports.default = Cart;
//# sourceMappingURL=cart.js.map