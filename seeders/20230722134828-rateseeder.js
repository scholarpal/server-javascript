'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let comment = "lorem ipsum"
    await queryInterface.bulkInsert("Rates", [
      {
        slug: "smkn-12-jakarta",
        category: "Hygine",
        star: 4,
        username: "ANON2",
        comment,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        slug: "smkn-12-jakarta",
        category: "Food & Beverage",
        star: 5,
        username: "ANON2",
        comment,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        slug: "smkn-12-jakarta",
        category: "Facility",
        star: 5,
        comment,
        username: "ANON2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        slug: "smkn-12-jakarta",
        category: "Organization",
        star: 3,
        username: "ANON2",
        comment,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        slug: "smkn-12-jakarta",
        category: "Hygine",
        star: 4,
        comment,
        username: "ANON3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        slug: "smkn-12-jakarta",
        category: "Food & Beverage",
        star: 5,
        comment,
        username: "ANON3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        slug: "smkn-12-jakarta",
        category: "Facility",
        star: 5,
        comment,
        username: "ANON3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        slug: "smkn-12-jakarta",
        category: "Organization",
        star: 4,
        comment,
        username: "ANON3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        slug: "smkn-12-jakarta",
        category: "Hygine",
        star: 5,
        comment,
        username: "ANON1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        slug: "smkn-12-jakarta",
        category: "Food & Beverage",
        star: 5,
        comment,
        username: "ANON1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        slug: "smkn-12-jakarta",
        category: "Facility",
        star: 5,
        comment,
        username: "ANON1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        slug: "smkn-12-jakarta",
        category: "Organization",
        star: 4,
        username: "ANON1",
        comment,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        slug: "smkn-12-jakarta",
        category: "Hygine",
        star: 2,
        comment,
        username: "ANON1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        slug: "smkn-12-jakarta",
        category: "Food & Beverage",
        star: 3,
        comment,
        username: "ANON4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        slug: "smkn-12-jakarta",
        category: "Facility",
        star: 3,
        comment,
        username: "ANON4",
        createdAt: new Date(),
        updatedAt: new Date()
      }




    ])
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
