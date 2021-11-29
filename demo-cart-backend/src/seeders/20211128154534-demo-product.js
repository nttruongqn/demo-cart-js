"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("products", [
      {
        id: 1,
        title: "sản phẩm 1",
        image: "/images/dress1.jpg",
        description: "Thông tin về sản phẩm",
        price: 200000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: "sản phẩm 2",
        image: "/images/dress2.jpg",
        description: "Thông tin về sản phẩm",
        price: 800000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        title: "sản phẩm 4",
        image: "/images/dress4.jpg",
        description: "Thông tin về sản phẩm",
        price: 300000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: "sản phẩm 3",
        image: "/images/dress3.jpg",
        description: "Thông tin về sản phẩm",
        price: 500000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        title: "sản phẩm 5",
        image: "/images/dress5.jpg",
        description: "Thông tin về sản phẩm",
        price: 200000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        title: "sản phẩm 6",
        image: "/images/dress6.jpg",
        description: "Thông tin về sản phẩm",
        price: 100000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
