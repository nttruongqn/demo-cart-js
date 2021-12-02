"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "product_sizes",
      [
        {
          size: "M",
          product_id: "1",
          valueVi: "Size M",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          size: "M",
          product_id: "4",
          valueVi: "Size M",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          size: "L",
          product_id: "1",
          valueVi: "Size L",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          size: "L",
          product_id: "2",
          valueVi: "Size L",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          size: "L",
          product_id: "4",
          valueVi: "Size L",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          size: "S",
          product_id: "5",
          valueVi: "Size S",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          size: "XXL",
          product_id: "3",
          valueVi: "Size XXL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          size: "XXL",
          product_id: "5",
          valueVi: "Size XXL ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          size: "XXL",
          product_id: "1",
          valueVi: "Size XXL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          size: "XXL",
          product_id: "4",
          valueVi: "Size XXL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
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
