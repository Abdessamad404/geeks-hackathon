// Import stuff

const mongoose = require("mongoose");
const Product = require("./models/Product");
const connectDB = require("./config/database");

// Sample products array
const sampleProducts = [
  {
    name: "Canon AE-1 Program 35mm Film Camera",
    description:
      "Iconic 1981 SLR camera used by professionals and enthusiasts worldwide. Full manual control with program mode. Body shows minimal wear, light meter working perfectly. A true classic of analog photography.",
    category: "Electronics",
    color: "Black",
    price: 285,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800",
    condition: "Good",
    year: 1981,
    inStock: true,
  },
  {
    name: "Sony Walkman WM-D6C Professional",
    description:
      "The holy grail of cassette players. Metal body, recording capability, and exceptional sound quality. Used by journalists and musicians in the 80s. Fully serviced with new belts.",
    category: "Electronics",
    color: "Silver/Chrome",
    price: 650,
    image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800",
    condition: "Mint",
    year: 1984,
    inStock: true,
  },
  {
    name: "Ray-Ban Aviator Classic Gold - 1970s",
    description:
      "Original vintage Ray-Ban aviators with 24K gold-plated frames and green G-15 lenses. Made in USA with B&L stamp. Comes with original leather case. Timeless style that never fades.",
    category: "Fashion",
    color: "Gold/Brass",
    price: 145,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
    condition: "Good",
    year: 1976,
    inStock: true,
  },
  {
    name: "Levi's 501 Selvedge Denim Jacket - Big E",
    description:
      'Rare 1960s Levi\'s Type III Trucker jacket with coveted "Big E" red tab. Selvedge denim with natural fading and whiskers. Size 42, fits modern medium. Investment-grade vintage denim.',
    category: "Fashion",
    color: "Colorful/Multi",
    price: 380,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
    condition: "Fair",
    year: 1967,
    inStock: true,
  },
  {
    name: "Ericofon Cobra Telephone - Swedish Design",
    description:
      "Revolutionary one-piece telephone designed by Ericsson. Sculptural form in vibrant red. Fully working rotary dial. A museum-quality piece of mid-century modern design.",
    category: "Home Decor",
    color: "Colorful/Multi",
    price: 220,
    image: "https://images.unsplash.com/photo-1564865878688-9a244444042a?w=800",
    condition: "Good",
    year: 1956,
    inStock: true,
  },
  {
    name: "George Nelson Bubble Lamp Saucer",
    description:
      "Authentic Herman Miller production of Nelson's iconic 1952 design. Translucent polymer skin stretched over steel frame. Creates beautiful ambient lighting. Original label intact.",
    category: "Home Decor",
    color: "Colorful/Multi",
    price: 425,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800",
    condition: "Mint",
    year: 1952,
    inStock: true,
  },
  {
    name: "Nintendo Game Boy Color - Atomic Purple",
    description:
      "Transparent purple Game Boy Color in excellent condition. Screen is crystal clear, no dead pixels. Includes Pokemon Gold cartridge. The definition of 90s nostalgia.",
    category: "Gaming",
    color: "Colorful/Multi",
    price: 165,
    image: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=800",
    condition: "Good",
    year: 1998,
    inStock: true,
  },
  {
    name: "Sega Genesis Model 1 High Definition Graphics",
    description:
      'First generation Sega Genesis with "High Definition Graphics" branding. Includes two original controllers and Sonic the Hedgehog. The console that defined a generation.',
    category: "Gaming",
    color: "Black",
    price: 195,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=800",
    condition: "Good",
    year: 1989,
    inStock: true,
  },
  {
    name: "Pink Floyd - Dark Side of the Moon - 1973 Original Press",
    description:
      "First pressing on Harvest Records with solid blue triangle labels and posters. Cover in VG+ condition with minimal wear. Vinyl plays beautifully with deep, rich sound. A cornerstone of any collection.",
    category: "Collectibles",
    color: "Black",
    price: 480,
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=800",
    condition: "Mint",
    year: 1973,
    inStock: true,
  },
  {
    name: "Vintage Coca-Cola Porcelain Button Sign",
    description:
      "Authentic 1950s porcelain enamel advertising sign. 24 inches diameter, vibrant colors with minimal chipping. From a closed soda fountain in Kansas. A genuine piece of Americana.",
    category: "Collectibles",
    color: "Colorful/Multi",
    price: 575,
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800",
    condition: "Fair",
    year: 1954,
    inStock: true,
  },
  {
    name: "Olivetti Lettera 32 Portable Typewriter",
    description:
      "The typewriter used by Cormac McCarthy, Leonard Cohen, and Sylvia Plath. Designed by Marcello Nizzoli in 1963. Fully functional with original case. Types beautifully with satisfying action.",
    category: "Electronics",
    color: "Colorful/Multi",
    price: 295,
    image: "https://images.unsplash.com/photo-1564865878688-9a244444042a?w=800",
    condition: "Good",
    year: 1963,
    inStock: true,
  },
  {
    name: "Sunburst Wall Clock - George Nelson for Howard Miller",
    description:
      "Iconic mid-century modern clock with brass sunburst rays. Battery quartz movement (original replaced for reliability). 20 inch diameter. The clock that defined the atomic age aesthetic.",
    category: "Home Decor",
    color: "Gold/Brass",
    price: 340,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800",
    condition: "Mint",
    year: 1960,
    inStock: true,
  },
];

const seedDB = async () => {
  try {
    // Connect to database
    await connectDB();

    // Clear existing products
    await Product.deleteMany({});
    console.log("🗑️  Cleared existing products!");

    // Insert products
    await Product.insertMany(sampleProducts);
    console.log("✅ Seeded 12 vintage products");

    // Disconnect from DB
    mongoose.connection.close();
    console.log("👋 Database connection closed");
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
};

seedDB();
