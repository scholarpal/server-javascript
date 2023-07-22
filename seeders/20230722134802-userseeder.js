'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        email: "dummy1@gmail.com",
        slug: "smkn-12-jakarta",
        username: "ANON1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "dummy2@gmail.com",
        slug: "smkn-12-jakarta",
        username: "ANON2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        slug: "smkn-12-jakarta",
        email: "dummy3@gmail.com",
        username: "ANON3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        slug: "smkn-12-jakarta",
        email: "ayusudi.abc@gmail.com",
        username: "ANON4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    )
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
