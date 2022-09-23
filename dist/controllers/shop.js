"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCheckout = exports.postOrder = exports.getOrders = exports.postCartDeleteProduct = exports.postCart = exports.getCart = exports.getIndex = exports.getProduct = exports.getProducts = void 0;
//! imp library
const Logging_1 = __importDefault(require("../library/Logging"));
//! Models
const product_1 = __importDefault(require("../models/product"));
//@ /products => GET
const getProducts = (req, res, next) => {
    Logging_1.default.shop('GET getProducts');
    product_1.default.fetchAll()
        .then((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products',
        });
    })
        .catch((err) => {
        console.log(err);
    });
};
exports.getProducts = getProducts;
//! Render Details Product
const getProduct = (req, res, next) => {
    Logging_1.default.shop('GET getProduct');
    const prodId = req.params.productId;
    product_1.default.findById(prodId)
        .then((product) => {
        res.render('shop/product-detail', {
            product: product,
            pageTitle: product === null || product === void 0 ? void 0 : product.title,
            path: '/products',
        });
    })
        .catch((err) => {
        console.log(err);
    });
};
exports.getProduct = getProduct;
const getIndex = (req, res, next) => {
    Logging_1.default.shop('GET getIndex');
    product_1.default.fetchAll()
        .then((productDocs) => {
        res.render('shop/index', {
            prods: productDocs,
            pageTitle: 'Shop',
            path: '/',
        });
    })
        .catch((err) => console.log(err));
};
exports.getIndex = getIndex;
//@ /cart => GET
const getCart = (req, res, next) => {
    var _a;
    Logging_1.default.shop('GET getCart');
    (_a = req.user) === null || _a === void 0 ? void 0 : _a.getCart().then((products) => {
        // console.log('__Debugger__productDocs: ', products);
        res.render('shop/cart', {
            path: '/cart',
            pageTitle: 'Your Cart',
            products: products,
        });
    }).catch((err) => {
        console.log(err);
    });
};
exports.getCart = getCart;
//@ /cart => POST
const postCart = (req, res, next) => {
    Logging_1.default.shop('POST postCart');
    const prodId = req.body.productId;
    product_1.default.findById(prodId)
        .then((productDoc) => {
        var _a;
        return (_a = req.user) === null || _a === void 0 ? void 0 : _a.addToCart(productDoc);
    })
        .then((result) => {
        res.redirect('/cart');
    })
        .catch((err) => {
        console.log(err);
    });
};
exports.postCart = postCart;
const postCartDeleteProduct = (req, res, next) => {
    var _a;
    Logging_1.default.shop('POST postCartDeleteProduct');
    const prodId = req.body.productId;
    (_a = req.user) === null || _a === void 0 ? void 0 : _a.deleteItemFromCart(prodId).then((result) => {
        // console.log('__Debugger__result: ', result);
        Logging_1.default.admin('redirect /cart');
        res.redirect('/cart');
    }).catch((err) => {
        console.log(err);
    });
};
exports.postCartDeleteProduct = postCartDeleteProduct;
const getOrders = (req, res, next) => {
    var _a;
    Logging_1.default.shop('GET getOrders');
    (_a = req.user) === null || _a === void 0 ? void 0 : _a.getOrders().then((orderDocs) => {
        res.render('shop/orders', {
            path: '/orders',
            pageTitle: 'Your Orders',
            orders: orderDocs,
        });
    }).catch((err) => {
        console.log(err);
    });
};
exports.getOrders = getOrders;
//@ /create-order => POST
const postOrder = (req, res, next) => {
    var _a;
    Logging_1.default.shop('POST postOrder');
    (_a = req.user) === null || _a === void 0 ? void 0 : _a.addOrder().then((orderDoc) => {
        console.log('__Debugger__orderDoc ', orderDoc);
        Logging_1.default.shop('redirect to /orders');
        res.redirect('/orders');
    }).catch((err) => {
        console.log(err);
    });
};
exports.postOrder = postOrder;
const getCheckout = (req, res, next) => {
    Logging_1.default.shop('GET getCheckout');
    // res.render('shop/checkout', {
    //   path: '/checkout',
    //   pageTitle: 'Checkout',
    // });
};
exports.getCheckout = getCheckout;
//# sourceMappingURL=shop.js.map