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
      name: "Training Bines",
      description: "Training Bines forgoes traditional bitterness in favor of a rounded juicy finish and a wonderfully complex olfaction profile of fruit, citrus, pine and floral notes from some of the Simcoe Lupulin Powder, Mosaic Lupulin Powder, and the Citra hops. An incredibly drinkable, dank, and beautifully nuanced example of what can be done when you focus on the quality of the hop and the farmers who grow it.",
      style: "IPA",
      imageurl: "https://untappd.akamaized.net/photos/2021_02_04/c018852e1535dc88577ef490068420bc_640x640.jpg",
      brewery: "Pinthouse Pizza",
      address: "4729 Burnet Rd, Austin, TX 78756",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
    name: "Jaguar Shark",
    description: "Bourbon Barrel Aged Imperial Dry Irish Stout",
    style: "Stout",
    imageurl: "https://untappd.akamaized.net/photos/2020_11_22/d5cb9fe06554ce9371029f8864306078_640x640.jpg",
    brewery: "Pinthouse Pizza",
    address: "4729 Burnet Rd, Austin, TX 78756",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Pearl-Snap",
    description: "German style pilsner",
    style: "Lager",
    imageurl: "https://pbs.twimg.com/media/DYg5pPKV4AAVXUC.jpg",
    brewery: "Austin Beerworks",
    address: "3001 Industrial Terrace, Austin, TX 78758",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Sputnik",
    description: "Oats. Cuvee Cofee. Alcohol. And we have litoff! Like the sight of a comet, the appearance of Sputnik has the locals thanking the brewing gods.",
    style: "Stout",
    imageurl: "https://austinbeerworks.com/imager/assets/general/Beer/714/sputnik-can-2020_d805f21cae4de1115f8c10e51cdb5f6f.png",
    brewery: "Austin Beerworks",
    address: "3001 Industrial Terrace, Austin, TX 78758",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Sour Cherry Einhorn",
    description: "Cherry Berliner Weisse",
    style: "Wild Sour",
    imageurl: "https://austinbeerworks.com/imager/assets/general/Beer/713/sour-cherry-einhorn-2020_df3094d9f7ca5873b5442daf3166afc6.png",
    brewery: "Austin Beerworks",
    address: "3001 Industrial Terrace, Austin, TX 78758",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Gold",
    description: "Live Oak Gold is a north German-style pilsner, cousin to our Czech-style Pilz, brewed with generous additions of Hallertau noble hops. The German lager yeast and lengthy secondary conditioning produces a crisp, bright, and very clean beer that really lets the flavors of the malt and hops shine through.",
    style: "Lager",
    imageurl: "http://cdn.pastemagazine.com/www/articles/live%20oak%20gold%20pils%20%282%29%20%28Custom%29.jpg",
    brewery: "Live Oak Brewing Company",
    address: "1615 Crozier Ln, Del Valle, TX 78617",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Hefeweizen",
    description: "Our Hefeweizen is authentically brewed using a traditional yeast strain that naturally creates the signature flavors of vanilla, clove, and banana.Modeled after the classic wheat beers of Bavaria, Hefe is cloudy and straw-colored with a meringue-like head that lingers to the bottom of the glass. Brewed with an ample volume of wheat malt and few hops. A traditional interpretation of a classic style, this idiosyncratic Bavarian beer is perfectly at home here in Texas.",
    style: "Wheat Beer",
    imageurl: "http://cdn.pastemagazine.com/www/articles/live%20oak%20hefe%20%28Custom%29.jpg",
    brewery: "Live Oak Brewing Company",
    address: "1615 Crozier Ln, Del Valle, TX 78617",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Pilz",
    description: "Live Oak Pilz is a classic Bohemian-style golden lager, decoction-mashed with a single heirloom variety Moravian malt. Premium Saaz hops combine to produce a clean, crisp pilsner with complex malt flavor and spicy hop bitterness and aroma. This is Austin’s Original Pilsner!",
    style: "Lager",
    imageurl: "https://i.redd.it/2misuvcihle21.jpg",
    brewery: "Live Oak Brewing Company",
    address: "1615 Crozier Ln, Del Valle, TX 78617",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Tahitian Dreamin'",
    description: "This majestic beauty tasting like a tropical voyage to the end of a rainbow. Brewed with Citra, Centennial, Simcoe and happiness. No reservations or tickets needed.",
    style: "IPA",
    imageurl: "https://images.squarespace-cdn.com/content/v1/533a1e9de4b0bea8053bdc89/1584484709558-PHIIHCZA6BJPZ59K7HCB/ke17ZwdGBToddI8pDm48kGUUsqD-m6zTFsh_CtMqwVt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0tb-hnCqoepq4X8c1traqO8m1v79v0qcouOjepfItR0d4QsEEcISShOMIclju4AdvA/Tahitian+Dreamin+IPA+.jpg?format=750w",
    brewery: "Southern Heights Brewing Company",
    address: "6014 Techni Center Dr ste 2-101, Austin, TX 78721",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Hoodie Weather",
    description: "Brewed with cocoa nibs and vanilla beans from Revolution Spirits, dark chocolate from TCHO Chocolate, and topping it off with coffee from the rad folks over at Red Horn.",
    style: "Stout",
    imageurl: "https://images.squarespace-cdn.com/content/v1/533a1e9de4b0bea8053bdc89/1584485099691-88EC0SF3VPFBIDNNZNGQ/ke17ZwdGBToddI8pDm48kBEMpy0rV1ZS6oaZKlHzdbh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kMlYkjvFlctRdmAM11rxFSJcsDpvpr_3YAZrXhA0J65Ijnf2GpBa0nCFucR1umk0Q/Hoodie+Weather2.jpg?format=750w",
    brewery: "Southern Heights Brewing Company",
    address: "6014 Techni Center Dr ste 2-101, Austin, TX 78721",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Jam Session",
    description: "Our super crushable raspberry sour, Jam Session. Nearly 500 pounds of delicious raspberry puree from @oregonfruitfermentation goes into making this one a true work of tart.",
    style: "Wild Sour",
    imageurl: "https://images.squarespace-cdn.com/content/v1/533a1e9de4b0bea8053bdc89/1584487086618-1YXEFF8JIRYXIG2HOR40/ke17ZwdGBToddI8pDm48kC6rx3ekhwLWcbSwQdmCIl1Zw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Xj1nVWs2aaTtWBneO2WM-tOBmPlICtZt9R-KzP_akRfFkxJLscNFNp29mlUMr9bew/image.jpg?format=750w",
    brewery: "Southern Heights Brewing Company",
    address: "6014 Techni Center Dr ste 2-101, Austin, TX 78721",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Solo",
    description: "DDH Hazy IPA hopped with 100% Cashmere Hops! SOLO is our latest endeavor that is solely-focused on unpacking the nuances and extremes of a single hop variety. And is there a better inaugural hop than Cashmere from our buddies at @crosbyfarms! With this first batch, we HEAVILY indulged on the double dry-hop – bringing you the dankness that only comes with opening a fresh bag of hops! Count on aromatics and flavors of ganja, nectarine skins, Fruity Pebbles™, and cherry hard candy!",
    style: "IPA",
    imageurl: "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/165241266_3793872244001685_7934553078325702757_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=a26aad&_nc_ohc=yVs7SKRKxKYAX-lA9sZ&_nc_ht=scontent-dfw5-1.xx&oh=6db5efae814433a5cd727480c9a91a65&oe=6098F050",
    brewery: "St. Elmo Brewing Company",
    address: "440 E St Elmo Rd G-2, Austin, TX 78745",
    createdAt: new Date(),
    updatedAt: new Date()
  },
{
name: "Merle",
description: "Merle is a Pilsner - Bohemian / Czech style beer that is lagered with Oak.",
style: "Lager",
imageurl: "https://untappd.akamaized.net/photos/2021_03_21/283e001c1a958d30a2b0c0f60a222599_640x640.jpg",
brewery: "St. Elmo Brewing Company",
address: "440 E St Elmo Rd G-2, Austin, TX 78745",
createdAt: new Date(),
updatedAt: new Date()
},
{
  name: "Rosa",
  description: "St. Elmo’s first sour, a raspberry variety kettle soured to tartness with lively carbonation.",
  style: "Wild Sour",
  imageurl: "https://untappd.akamaized.net/photos/2021_04_02/e945ea48621c977894f8134a74c6881c_640x640.jpeg",
  brewery: "St. Elmo Brewing Company",
  address: "440 E St Elmo Rd G-2, Austin, TX 78745",
  createdAt: new Date(),
  updatedAt: new Date()
  },
{
  name: "Nostalgia Road",
  description: "A trip down memory lane with the best of both old school and new school IPA's. Packed with Simcoe (t90/Cryo), Sultan (Cryo) and Mosaic (t90/Cryo). Dank and spicy with a big pineapple note on top.",
  style: "IPA",
  imageurl: "https://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2018/03/07151603/Glass-and-Bar-1024x681.jpg",
  brewery: "Oddwood Brewing",
  address: "3108 Manor Rd, Austin, TX 78723",
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
    name: "Perfect Strangers",
    description: "Foeder Sour Blond (6.5) - Mixed culture sour aged in our oak foeders for over a year. Complex notes of fermented citrus, earthy funk, and a refreshing lemony tartness.",
    style: "Wild Sour",
    imageurl: "https://cloudinary-assets.dostuffmedia.com/res/dostuff-media/image/upload/venue-401482/1540414735.jpg",
    brewery: "Oddwood Brewing",
    address: "3108 Manor Rd, Austin, TX 78723",
    createdAt: new Date(),
    updatedAt: new Date()
    },
  {
    name: "Future Utopia",
    description: "Hazy IPL (5.8%). Ultra modern lager hopped to the brim with Citra, Simcoe, Simcoe Cryo, Citra Cryo. Notes of citrus and mango.",
    style: "Lager",
    imageurl: "https://pbs.twimg.com/media/EUximTkXgAAFWwP.jpg:large",
    brewery: "Oddwood Brewing",
    address: "3108 Manor Rd, Austin, TX 78723",
    createdAt: new Date(),
    updatedAt: new Date()
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
  }
};
