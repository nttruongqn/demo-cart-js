
import productService from '../services/productService'


let getAllProduct = async(req, res) => {
  try {
    let resp = await productService.getAllProduct();
    // console.log("data", res);
    return res.status(200).json(resp);

  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    }) 
  }
};

module.exports = {
  getAllProduct: getAllProduct,
};
