# Configuration System

This directory contains all configuration files for the VistaCloud website, making it easy to update content, pricing, and promotional information without editing HTML files directly.

## Configuration Files

### 📁 `site-config.js`
Contains basic site information and branding:
- Company name and tagline
- Contact information (email, Discord, portal)
- SEO meta tags and descriptions
- Navigation menu items
- Footer links
- Hero section content
- Trust badges and stats

### 💰 `pricing-config.js`
All pricing information:
- Main pricing plans (homepage)
- Games page pricing plans
- Game-specific pricing (Minecraft, FiveM, Rust, etc.)
- Currency settings
- Discount periods

### 📢 `advertising-config.js`
Promotional content and banners:
- Current promotions and discount codes
- Hero page banners
- Call-to-action sections
- Special offers and announcements
- Social proof and testimonials
- Feature highlights

### 🎮 `games-config.js`
Game information and features:
- Supported games list with icons and colors
- Game-specific features and descriptions
- Server types and performance metrics
- Common features across all games
- Server locations and support levels

### ⚙️ `config-loader.js`
Configuration loader and renderer:
- Loads all configuration files
- Provides helper functions for dynamic content
- Renders navigation, pricing cards, game cards, etc.
- Initializes the configuration system

## How to Use

### 1. Basic Usage
All HTML files should include the configuration files:

```html
<!-- Configuration Files -->
<script src="configs/site-config.js"></script>
<script src="configs/pricing-config.js"></script>
<script src="configs/advertising-config.js"></script>
<script src="configs/games-config.js"></script>
<script src="configs/config-loader.js"></script>
```

### 2. Update Prices
Edit `pricing-config.js`:

```javascript
// Change main pricing
plans: [
    {
        name: "Starter",
        price: 10, // Changed from 8
        // ... rest of config
    }
]
```

### 3. Update Promotions
Edit `advertising-config.js`:

```javascript
// Update current promotion
promotions: {
    active: true,
    code: "20OFF",      // Changed from "10OFF"
    discount: 20,       // Changed from 10
    description: "Use Code: 20OFF for 20% OFF"
}
```

### 4. Add New Game
Edit `games-config.js`:

```javascript
supportedGames: [
    // ... existing games
    {
        id: "newgame",
        name: "New Game",
        icon: "🎯",
        page: "NewGame.html",
        // ... rest of config
    }
]
```

### 5. Dynamic Rendering
Use the renderer to generate content:

```javascript
// Initialize configs
const configs = await window.configSystem.init();

// Render pricing cards
document.querySelector('.pricing-grid').innerHTML = configs.renderer.renderPricingCards();

// Render game cards
document.querySelector('.games-grid').innerHTML = configs.renderer.renderGameCards();
```

### 🖼️ Using Images

The configuration system includes all your images for easy access:

```javascript
// In site-config.js
images: {
    logo: "images/logo.webp",
    heroBackground: "images/hero-background.png",
    controlPanel: "images/control-panel.png",
    performanceHardware: "images/performance-hardware.png"
}

// In games-config.js  
gameImages: {
    minecraft: {
        performance: "images/minecraft-performance.png"
    },
    fivem: {
        performance: "images/fivem-performance.png" 
    }
}
```

**Dynamic Hero Background:**
```javascript
// Automatically adds background image to hero section
const heroSection = document.querySelector('.hero');
heroSection.style.backgroundImage = `url('${configs.site.images.heroBackground}')`;
```

**Game-Specific Performance Images:**
```javascript
// Use different images for different games
const perfImage = configs.games.gameImages.minecraft.performance;
document.querySelector('.performance-img').src = perfImage;
```

**Control Panel Showcase:**
```javascript
// Generate control panel section with image
document.querySelector('.control-panel-section').innerHTML = 
    configs.renderer.renderControlPanelShowcase();
```

## Quick Updates

### 🏷️ Change Company Name
```javascript
// In site-config.js
company: {
    name: "YourCompany", // Change this
    // ...
}
```

### 💳 Update Contact Info
```javascript
// In site-config.js
contact: {
    email: "new-email@company.com",
    discord: "https://discord.gg/newserver",
    portal: "https://new-portal.company.com"
}
```

### 🎨 Update Colors
```javascript
// In games-config.js
{
    id: "minecraft",
    colors: {
        primary: "#ff0000",    // Change primary color
        secondary: "#00ff00"  // Change secondary color
    }
}
```

### 📊 Update Stats
```javascript
// In site-config.js
stats: [
    { value: "99.99%", label: "Uptime Guarantee" }, // Updated
    { value: "<25ms", label: "Average Ping" },       // Updated
    // ...
]
```

## Benefits

✅ **Easy Updates**: Change prices, promotions, and content in one place
✅ **Consistency**: All pages use the same configuration
✅ **Quick Deployment**: Update configs without touching HTML
✅ **Version Control**: Track changes to pricing and promotions
✅ **Dynamic Content**: Render content based on configuration
✅ **Maintenance**: Centralized configuration management

## Examples

### Holiday Promotion
```javascript
// In advertising-config.js
promotions: {
    active: true,
    code: "HOLIDAY25",
    discount: 25,
    description: "🎄 Holiday Special: 25% OFF All Plans!",
    validUntil: "2024-12-31"
}
```

### New Pricing Tiers
```javascript
// In pricing-config.js
plans: [
    { name: "Basic", price: 5 },
    { name: "Pro", price: 15 },
    { name: "Business", price: 25 },
    { name: "Enterprise", price: 50 }
]
```

### Add New Server Location
```javascript
// In games-config.js
serverLocations: [
    // ... existing locations
    "Japan (Tokyo)",
    "India (Mumbai)"
]
```

This configuration system makes website maintenance fast and efficient, allowing you to focus on growing your business rather than editing code.