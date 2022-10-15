import express from 'express';
//! imp Controllers
import * as adminController from '../controllers/admin';
import isAuth from '../middleware/is-auth';

const router = express.Router();

//@ /admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct);

//@ /admin/add-product => POST
router.post('/add-product', isAuth, adminController.postAddProduct);

//@ /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);

//@ /admin/edit-product/:productId => GET
router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

//@ /admin/edit-product/:productId => POST
router.post('/edit-product', isAuth, adminController.postEditProduct);

//@ /admin/delete-product => POST
router.post('/delete-product', isAuth, adminController.postDeleteProduct);

export default router;
