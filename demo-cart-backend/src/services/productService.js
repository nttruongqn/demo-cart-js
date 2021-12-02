const db = require("../models");

let getAllProduct = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let dataP = await db.Product.findAll({});
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

let getAllProductByParam = (size, sort) => {
  return new Promise(async (resolve, reject) => {
    try {
      let dataSize = [];
      if (!size || !sort) {
        resolve({
          errCode: -1,
          errMessage: "Missing param",
        });
      } else {
        if (size === "ALL") {
          if (sort === "ALL") {
            dataSize = await db.Product.findAll({
              // include: [
              //   {
              //     model: db.Product_Size,
              //     as: "sizeData",
              //   },
              // ],
              // raw: false,
            });
          }
          else if (sort === "latest") {
            {
              dataSize = await db.Product.findAll({
                order: [["id", "DESC"]],
              });
            }
          }
          else if (sort === "lowest") {
            {
              dataSize = await db.Product.findAll({
                order: [["price", "ASC"]],
              });
            }
          }
          else if (sort === "highest") {
            {
              dataSize = await db.Product.findAll({
                order: [["price", "DESC"]],
              });
            }
          }
        } else {
          if (sort === "ALL") {
            dataSize = await db.Product.findAll({
              include: [
                {
                  model: db.Product_Size,
                  as: "sizeData",
                  where: {
                    size: size,
                  },
                },
              ],
  
              raw: false,
            });
          }
          else if (sort === "latest") {
            dataSize = await db.Product.findAll({
              include: [
                {
                  model: db.Product_Size,
                  as: "sizeData",
                  where: {
                    size: size,
                  }
                },
              ],
              order: [["id", "DESC"]],
            
  
              raw: false,

            })
          }
          else if (sort === "lowest") {
            dataSize = await db.Product.findAll({
              include: [
                {
                  model: db.Product_Size,
                  as: "sizeData",
                  where: {
                    size: size,
                   
                  },
                },
              ],
              order: [["price", "ASC"]],
  
              raw: false,

            })
          }
          else if (sort === "highest") {
            dataSize = await db.Product.findAll({
              include: [
                {
                  model: db.Product_Size,
                  as: "sizeData",
                  where: {
                    size: size,
                   
                  },
                },
              ],
              order: [["price", "DESC"]],
              raw: false,

            })
          }
          
        }
      }

      resolve({
        errCode: 0,
        errMessage: "OK",
        data: dataSize,
      });
    } catch (error) {
      reject(error);
    }
  });
};

let getAllSize = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await db.Product_Size.findAll({
        attributes: ["size", "valueVi"],
        group: ["size", "valueVi"],
      });
      resolve({
        errCode: 0,
        errMessage: "ok",
        data: res,
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllProduct: getAllProduct,
  getAllSize: getAllSize,
  getAllProductByParam: getAllProductByParam,
};
