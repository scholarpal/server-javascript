'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Schools', [{
      id: "524F2DEB-D1D8-46D9-A020-46AC1C22B767",
      name: "SMKN 12 Jakarta",
      slug: "smkn-12-jakarta",
      latitude: "-6.1149000",
      longitude: "106.8861000",
      address: "JL. KEBON BAWANG 15",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
