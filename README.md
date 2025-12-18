# 🏛️ Vintage Vibe

**Retro. Revisited.**

A vintage e-commerce marketplace specializing in authentic retro collectibles from the 1920s-1990s. Built for the Geeks Hackathon 2024.

---

## 📋 Project Overview

Vintage Vibe is a full-stack web application that brings together collectors and enthusiasts of vintage items. From retro electronics to classic fashion, our platform offers a curated selection of authentic pieces from decades past.

### 🎯 Key Features

- **Product Catalog** - Browse 12+ authentic vintage items across 5 categories
- **Advanced Search & Filtering** - Sidebar filters with category, color, and name search
- **Product Details** - Comprehensive information including year, condition, and specifications
- **Magic Link Authentication** - Secure, passwordless login with name collection
- **Personalized Experience** - Greeting users by name with session management
- **Responsive Design** - Vintage 1920s-1950s aesthetic with modern functionality
- **User Profiles** - Track login history and manage sessions

---

## 🛠️ Tech Stack

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - ODM for MongoDB

### Frontend

- **Handlebars (HBS)** - Server-side templating
- **HTML5 & CSS3** - Semantic markup and styling
- **Custom CSS** - Vintage-inspired design system with Google Fonts

### Authentication

- **Express Session** - Session management
- **Crypto** - Secure token generation
- **Magic Link** - Passwordless authentication

### Tools & Services

- **Git & GitHub** - Version control
- **Nano Banana** - AI logo generation

---

## 📁 Project Structure
```
├── config/
│   └── database.js          # MongoDB connection
├── controllers/
│   ├── authController.js    # Authentication logic
│   ├── pageController.js    # Page rendering
│   └── productController.js # Product API
├── models/
│   ├── Product.js           # Product schema
│   └── User.js              # User schema (with name field)
├── routes/
│   ├── authRoutes.js        # Auth routes
│   ├── pageRoutes.js        # Page routes
│   └── productRoutes.js     # API routes
├── views/
│   ├── layouts/
│   │   └── main.handlebars  # Main layout with structured header
│   ├── about.handlebars
│   ├── contact.handlebars
│   ├── home.handlebars
│   ├── login.handlebars
│   ├── magic-link-sent.handlebars
│   ├── products.handlebars
│   └── product-detail.handlebars
├── public/
│   ├── css/
│   │   └── style.css        # Vintage design system
│   └── images/
│       └── logo.jpg
├── seedProducts.js          # Database seeding
└── server.js                # Application entry point
```

---

## 🎨 Design Philosophy

Vintage Vibe embraces authentic 1920s-1950s design aesthetics:

- **Art Deco influences** - Geometric patterns and elegant typography
- **Aged paper textures** - Warm, nostalgic color palette
- **Vintage typography** - Playfair Display, Special Elite, Libre Baskerville
- **Trading card layouts** - Product cards with ornamental details
- **Sepia filters** - Authentic vintage photograph feel
- **Three-section header** - Logo (left), Navigation (center), User menu (right)

**Color Palette:**

- Primary: `#3d2817` (Vintage Brown)
- Accent: `#c9a961` (Vintage Gold)
- Background: `#faf6f0` (Vintage Paper)
- Text: `#1a0f0a` (Vintage Dark)
- Red Accent: `#8b2e2e` (Vintage Red)

---

## 🗄️ Database Design

### Collections

#### Products
```javascript
{
  name: String (required),
  description: String (required),
  category: String (enum: Electronics, Fashion, Home Decor, Collectibles, Gaming),
  color: String (enum: Black, Brown/Wood, Silver/Chrome, Gold/Brass, Colorful/Multi),
  price: Number (required),
  image: String (required),
  condition: String (enum: Mint, Good, Fair),
  year: Number (1900-current),
  inStock: Boolean (default: true),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

#### Users
```javascript
{
  name: String (required),        // Added for personalization
  email: String (required, unique),
  magicToken: String,
  tokenExpiry: Date,
  lastLogin: Date,
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

---

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v18+)
- MongoDB Atlas account
- Git

### Local Development

1. **Clone the repository**
```bash
   git clone https://github.com/Abdessamad404/geeks-hackathon.git
   cd geeks-hackathon
```

2. **Install dependencies**
```bash
   npm install
```

3. **Configure database**

   - Update MongoDB connection string in `config/database.js`

4. **Seed the database**
```bash
   node seedProducts.js
```

5. **Start the server**
```bash
   node server.js
```

6. **Open in browser**
```
   http://localhost:3000
```

---

## 🎯 API Endpoints

### Products API

- `GET /api/products` - Get all products
- `GET /api/products?search=camera` - Search products
- `GET /api/products?category=Electronics` - Filter by category
- `GET /api/products?color=Black` - Filter by color
- `GET /api/products/:id` - Get single product

### Page Routes

- `GET /` - Home page
- `GET /products` - Products catalog with sidebar filters
- `GET /products/:id` - Product detail
- `GET /about` - About page
- `GET /contact` - Contact page
- `GET /login` - Login page (collects name + email)
- `POST /login` - Send magic link
- `GET /auth/verify` - Verify magic link
- `GET /logout` - Logout
- `POST /contact` - Submit contact form

---

## ✨ Features Showcase

### Magic Link Authentication

Secure, passwordless login system with personalization:

1. User enters **name** and **email**
2. System generates unique token (15-min expiry)
3. User record created/updated with name
4. Magic link sent (displayed on screen for demo)
5. Click link to auto-login
6. Session stores user ID, name, and email
7. Header displays "Hi, [Name]" greeting

### Advanced Filtering

- Sidebar layout with persistent filters
- Real-time search across product names
- Category filtering (5 categories)
- Color filtering (5 color options)
- Combined filters for precise results
- Sticky sidebar on desktop

### Responsive Design

- Desktop-optimized layout with three-section header
- Mobile-friendly navigation
- Sidebar filters on desktop, stacked on mobile
- Vintage aesthetic maintained across all screen sizes

---

## 👨‍💻 Developer

**Abdessamad**

- GitHub: [@Abdessamad404](https://github.com/Abdessamad404)
- Location: Casablanca, Morocco
- Role: Full-Stack Developer

---

## 📄 License

This project was created for the Geeks Hackathon 2024.

---

## 🙏 Acknowledgments

- **Nano Banana** - AI-generated logo
- **Unsplash** - Product images
- **Google Fonts** - Typography (Playfair Display, Special Elite, Libre Baskerville)
- **MongoDB Atlas** - Cloud database hosting

---

**Built with ❤️ for vintage enthusiasts**