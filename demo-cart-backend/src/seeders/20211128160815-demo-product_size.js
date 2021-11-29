'use strict';

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
    
     await queryInterface.bulkInsert('product_sizes', [{
       size: 'M',
       product_id:'1',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      size: 'M',
      product_id:'4',
      createdAt: new Date(),
      updatedAt: new Date(),
       },
       {
        size: '6',
        product_id:'1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     {
       size: 'L',
       product_id:'2',
      createdAt: new Date(),
      updatedAt: new Date(),
       },
       {
        size: 'L',
        product_id:'4',
       createdAt: new Date(),
       updatedAt: new Date(),
       },
       {
        size: 'L',
        product_id:'5',
       createdAt: new Date(),
       updatedAt: new Date(),
        },
       {
         size: 'XXL',
         product_id:'3',
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        size: 'XXL',
        product_id:'5',
       createdAt: new Date(),
       updatedAt: new Date(),
       },
       {
        size: 'XXL',
        product_id:'1',
       createdAt: new Date(),
       updatedAt: new Date(),
      },
       {
         size: 'XXL',
         product_id:'4',
        createdAt: new Date(),
        updatedAt: new Date(),
        }], {});
        
  },
  

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
