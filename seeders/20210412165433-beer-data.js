'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('beers', [{
      name: "SPON 3 Year Blend",
      description: "1, 2, & 3 year old blend of 100% spontaneously fermented beers",
      style: "Wild Sour",
      imageurl: "https://static.spacecrafted.com/eae6599fef4c4b5d9569bac99e44241e/i/e7d9a8d04583448e8feff994cd6e2bb7/1/GCuCv726gZycFxatRE67kG/SPON%203%20Yr.jpg",
      brewery: "Jester King Brewery",
      address: "13187 Fitzhugh Rd, Austin, TX 78736",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Atrial Rubicite",
      description: "Atrial Rubicite is our barrel aged wild ale re-fermented with over 6 pounds per gallon of raspberries! Brewed with well water and local malt, Atrial Rubicite is aged for roughly a year in oak barrels before fruit re-fermentation and 100% natural conditioning.",
      style: "Wild Sour",
      imageurl: "https://wfg22p.s3.amazonaws.com/media/dishes/atrial_rubicite_beer_6874-reg.jpg",
      brewery: "Jester King Brewery",
      address: "13187 Fitzhugh Rd, Austin, TX 78736",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Electric Jellyfish",
      description: "Brewed with some of our favorite new hop varieties from our favorite hop farmers - Citra, Simcoe, Chinook, Ekuanot, Azacca, and Galaxy. Electric Jellyfish is filled with a bright tropical citrus character along with notes of orange, mango, lychee, and a floral backbone. The Jellyfish is a hazy new school IPA focusing on the juicy hop flavor and aroma while keeping the bitterness balanced and refreshing.",
      style: "IPA",
      imageurl: "https://cdn.shopify.com/s/files/1/3000/9520/articles/IMG_2921_1400x.jpg?v=1582223361",
      brewery: "Pinthouse Pizza",
      address: "4729 Burnet Rd, Austin, TX 78756",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "SPON 3 Year Blend",
      description: "1, 2, & 3 year old blend of 100% spontaneously fermented beers",
      style: "IPA",
      imageurl: "https://static.spacecrafted.com/eae6599fef4c4b5d9569bac99e44241e/i/e7d9a8d04583448e8feff994cd6e2bb7/1/GCuCv726gZycFxatRE67kG/SPON%203%20Yr.jpg",
      brewery: "Pinthouse Pizza",
      address: "4729 Burnet Rd, Austin, TX 78756",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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
