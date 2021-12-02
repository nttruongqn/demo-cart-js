import { response } from "express";
import productService from "../services/productService";

let getAllProduct = async (req, res) => {
  try {
    let resp = await productService.getAllProduct();
    // console.log("data", res);
    return res.status(200).json(resp);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

let getAllSize = async (req, res) => {
  try {
    let resp = await productService.getAllSize();
    return res.status(200).json(resp);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

let getAllProductByParam = async (req, res) => {
  try {
    let resp = await productService.getAllProductByParam(
      req.query.size,
      req.query.sort
    );
    return res.status(200).json(resp);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

module.exports = {
  getAllProduct: getAllProduct,
  getAllSize: getAllSize,
  getAllProductByParam: getAllProductByParam,
};
