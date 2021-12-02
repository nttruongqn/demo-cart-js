import express from "express";
import productController from '../controllers/productController';

let router = express.Router();

let initWebRoutes = (app) => {
 
    router.get("/api/getAllProduct", productController.getAllProduct);
    router.get("/api/getAllSize", productController.getAllSize);
    router.get("/api/getAllProductByParam",productController.getAllProductByParam);
    return app.use("/", router);
};

module.exports = initWebRoutes;
