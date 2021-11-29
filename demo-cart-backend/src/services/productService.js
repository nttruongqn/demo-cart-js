const db = require("../models");

let getAllProduct = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let dataP = await db.Product.findAll(
        {
          include: [
            {
              model: db.Product_Size,
              as: "sizeData",
            }
          ],
          raw:false,
        
        },
       
        );
      resolve({
        errCode: 0,
        errMessage: "OK",
        data: dataP,
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllProduct: getAllProduct,
};
