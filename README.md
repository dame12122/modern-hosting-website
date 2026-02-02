# VistaCloud Gaming Website

A modern, responsive gaming website built with pure HTML, CSS, and JavaScript. This website features a sleek dark theme with smooth animations and excellent user experience.

## � Clean File Structure

```
sunnywebsitev2/
├── index.html              # Modern homepage
├── Games.html              # Games listing page  
├── Minecraft.html          # Minecraft hosting page
├── FiveM.html             # FiveM hosting page
├── modern.css             # Complete CSS framework
├── README.md              # This documentation
└── images/                # Clean image assets
    ├── logo.webp                              # VistaCloud logo
    ├── hero-background.png                     # Hero section background
    ├── performance-hardware.png               # Performance hardware image
    ├── control-panel.png                       # Control panel screenshot
    ├── minecraft-performance.png              # Minecraft hosting image
    └── fivem-performance.png                   # FiveM hosting image
```

## 🎨 CSS Framework

The `modern.css` file includes a complete CSS framework with:

### CSS Variables
```css
:root {
  --primary-color: #6366f1;
  --primary-dark: #4f46e5;
  --secondary-color: #22d3ee;
  --accent-color: #f59e0b;
  --dark-bg: #0f172a;
  --card-bg: #1e293b;
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
}
```

### Component Classes
- **Layout**: `.container`, `.section`, `.grid`, `.flex`
- **Cards**: `.card`, `.card-glass`, `.feature-card`, `.pricing-card`
- **Buttons**: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-accent`
- **Navigation**: `.navbar`, `.nav-menu`, `.nav-link`
- **Typography**: `h1-h6`, `.text-center`, `.text-primary`
- **Utilities**: `.mb-*`, `.mt-*`, `.gap-*`, `.rounded-*`

### Responsive Grid System
```css
.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
```

## 📱 Responsive Breakpoints

- **Mobile**: `max-width: 480px`
- **Tablet**: `max-width: 768px`
- **Desktop**: `min-width: 769px`

## 🎯 Page Structure

### Homepage (index-new.html)
- Hero section with main value proposition
- Features showcase (3-column grid)
- Performance section with stats
- Games preview section
- Pricing preview
- Call-to-action section

### Games Page (Games-new.html)
- Games grid with 6 supported games
- Features overview
- Pricing tables
- Detailed feature descriptions

### Minecraft Page (Minecraft-new.html)
- Minecraft-specific hero
- Java vs Bedrock comparison
- Performance metrics
- 4-tier pricing structure
- FAQ section

### FiveM Page (FiveM-new.html)
- FiveM-specific hero
- Framework support (ESX, QBCore)
- Resource requirements guide
- 3-tier pricing structure
- FAQ section

## 🛠️ Customization

### Adding New Colors
Edit the CSS variables in `modern.css`:
```css
:root {
  --new-color: #your-color;
}
```

### Modifying Layout
Change grid layouts by updating the grid classes:
```html
<div class="grid grid-cols-3 gap-lg">
  <!-- Content -->
</div>
```

### Adding Animations
Use the built-in animation classes:
```html
<div class="animate-fadeInUp">Content</div>
<div class="animate-slideInLeft">Content</div>
```

## 🚀 Getting Started

1. **Upload files** to your web server
2. **Update logo** in `images/` folder
3. **Customize colors** in `modern.css` variables
4. **Update links** to point to your actual portals
5. **Test responsiveness** on different devices

## 📐 Browser Support

- **Chrome** 60+
- **Firefox** 55+
- **Safari** 12+
- **Edge** 79+
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## ⚡ Performance Features

- **CSS-only animations** (no JavaScript required for basic animations)
- **Optimized images** with WebP format where supported
- **Minimal JavaScript** for essential interactions only
- **Lazy loading** ready structure
- **SEO optimized** meta tags and semantic HTML

## 🎮 Game-Specific Features

### Minecraft Hosting
- Java & Bedrock edition support
- One-click mod installation
- Server type comparison
- Resource calculator

### FiveM Hosting
- Framework support (ESX, QBCore)
- Custom script support
- Voice chat compatibility
- Community size recommendations

## 🔧 Maintenance

### Regular Updates
- Update pricing information
- Add new game support
- Refresh content sections
- Check external links

### Performance Monitoring
- Monitor page load speeds
- Test mobile responsiveness
- Check form submissions
- Review analytics data

## 🎨 Design Inspiration

This redesign follows modern web design trends:
- **Dark mode** preference
- **Glass morphism** effects
- **Micro-interactions**
- **Accessibility** focus
- **Mobile-first** approach

- this was a project me and my friend had and i rewrote it all cleaned up and now released as this, as far as i know style is a lil off but its usuable definitely a good starter 

---

**Built with ❤️ by Dame for the VistaCloud gaming community**
