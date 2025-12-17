// Import stuff

const mongoose = require("mongoose");
const Product = require("./models/Product");
const connectDB = require("./config/database");

// Sample products array
const sampleProducts = [
  {
    name: "Vintage Polaroid SX-70 Camera",
    description:
      "Classic instant camera from the 1970s in working condition. Comes with original leather case.",
    category: "Electronics",
    color: "Brown/Wood",
    price: 450,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    condition: "Good",
    year: 1972,
    inStock: true,
  },
  {
    name: "Sony Walkman WM-10",
    description:
      "Ultra-thin cassette player from 1983. Revolutionary design, still plays perfectly.",
    category: "Electronics",
    color: "Black",
    price: 320,
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
    condition: "Mint",
    year: 1983,
    inStock: true,
  },
  {
    name: "Retro Aviator Sunglasses",
    description:
      "Original 1980s aviator sunglasses with gold frame. Timeless classic.",
    category: "Fashion",
    color: "Gold/Brass",
    price: 85,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    condition: "Good",
    year: 1986,
    inStock: true,
  },
  {
    name: "Vintage Levi's Denim Jacket",
    description:
      "Classic 501 denim jacket with authentic wear and patina. Size M.",
    category: "Fashion",
    color: "Colorful/Multi",
    price: 120,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    condition: "Fair",
    year: 1990,
    inStock: true,
  },
  {
    name: "Rotary Dial Telephone",
    description:
      "Working rotary phone from the 1960s. Perfect conversation piece.",
    category: "Home Decor",
    color: "Black",
    price: 95,
    image: "https://images.unsplash.com/photo-1596079890744-c1a0462d0975",
    condition: "Good",
    year: 1965,
    inStock: true,
  },
  {
    name: "Vintage Tiffany-Style Lamp",
    description:
      "Beautiful stained glass lamp with brass base. Illuminates beautifully.",
    category: "Home Decor",
    color: "Colorful/Multi",
    price: 280,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15",
    condition: "Mint",
    year: 1975,
    inStock: true,
  },
  {
    name: "Nintendo Game Boy (Original)",
    description:
      "Classic grey Game Boy from 1989. Screen is clear, all buttons work.",
    category: "Gaming",
    color: "Colorful/Multi",
    price: 180,
    image: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd",
    condition: "Good",
    year: 1989,
    inStock: true,
  },
  {
    name: "Sega Genesis Console Bundle",
    description:
      "Complete Sega Genesis with 2 controllers and 5 classic games.",
    category: "Gaming",
    color: "Black",
    price: 220,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128",
    condition: "Good",
    year: 1988,
    inStock: true,
  },
  {
    name: "The Beatles - Abbey Road Vinyl",
    description:
      "Original 1969 pressing in excellent condition. A true collector's item.",
    category: "Collectibles",
    color: "Black",
    price: 350,
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617",
    condition: "Mint",
    year: 1969,
    inStock: true,
  },
  {
    name: "Vintage Coca-Cola Sign",
    description:
      "Authentic metal Coca-Cola advertising sign from a 1950s diner.",
    category: "Collectibles",
    color: "Colorful/Multi",
    price: 425,
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5",
    condition: "Fair",
    year: 1955,
    inStock: true,
  },
  {
    name: "Typewriter Olivetti Lettera 32",
    description:
      "Iconic portable typewriter. Used by famous writers. Fully functional.",
    category: "Electronics",
    color: "Colorful/Multi",
    price: 340,
    image: "https://images.unsplash.com/photo-1564865878688-9a244444042a",
    condition: "Good",
    year: 1963,
    inStock: true,
  },
  {
    name: "Mid-Century Modern Clock",
    description:
      "Sunburst wall clock, quintessential 1960s design. Battery operated.",
    category: "Home Decor",
    color: "Gold/Brass",
    price: 155,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c",
    condition: "Mint",
    year: 1968,
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
