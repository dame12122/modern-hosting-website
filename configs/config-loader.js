// Configuration Loader - Loads all configs and provides helper functions
// Include this file in your HTML pages to use the configuration system

// Load all configuration files
async function loadConfigs() {
    try {
        // In a real environment, these would be loaded from separate files
        // For now, we'll define them as imports from the config files
        
        // Import configurations (these would be separate script tags in HTML)
        const siteConfig = window.siteConfig;
        const pricingConfig = window.pricingConfig;
        const advertisingConfig = window.advertisingConfig;
        const gamesConfig = window.gamesConfig;

        return {
            site: siteConfig,
            pricing: pricingConfig,
            advertising: advertisingConfig,
            games: gamesConfig
        };
    } catch (error) {
        console.error('Error loading configurations:', error);
        return null;
    }
}

// Helper functions for dynamic content generation
class ConfigRenderer {
    constructor(configs) {
        this.configs = configs;
    }

    // Generate navigation menu
    renderNavigation() {
        const nav = this.configs.site.navigation;
        return nav.map(item => 
            `<li><a href="${item.href}" class="nav-link ${item.active ? 'active' : ''}">${item.name}</a></li>`
        ).join('');
    }

    // Generate footer links
    renderFooterLinks() {
        const links = this.configs.site.footerLinks;
        return links.map(link => 
            `<a href="${link.href}" class="footer-link">${link.name}</a>`
        ).join('');
    }

    // Generate pricing cards
    renderPricingCards(planType = 'plans') {
        const plans = this.configs.pricing[planType];
        return plans.map(plan => `
            <div class="card pricing-card ${plan.featured ? 'featured' : ''}">
                ${plan.badge ? `<div class="pricing-badge">${plan.badge}</div>` : ''}
                <h3 class="pricing-name">${plan.name}</h3>
                <div class="pricing-price">
                    ${this.configs.pricing.currency.symbol}${plan.price}<span>/${plan.period}</span>
                </div>
                <ul class="pricing-features">
                    ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <a href="${this.configs.site.contact.portal}" class="btn ${plan.buttonStyle} w-full">${plan.buttonText}</a>
            </div>
        `).join('');
    }

    // Generate game cards
    renderGameCards() {
        const games = this.configs.games.supportedGames;
        return games.map((game, index) => `
            <div class="card animate-fadeInUp game-card" style="animation-delay: ${index * 0.1}s;">
                <div class="game-card-bg" style="background: linear-gradient(135deg, ${game.colors.primary}20, ${game.colors.secondary}20);"></div>
                <div style="text-align: center; padding: var(--space-xl) 0; position: relative; z-index: 2;">
                    <div class="game-icon" style="font-size: 4rem; margin-bottom: var(--space-md); animation: float 6s ease-in-out infinite; animation-delay: ${index}s;">${game.icon}</div>
                    <h3 style="font-size: 1.5rem; margin-bottom: var(--space-sm); background: linear-gradient(135deg, ${game.colors.primary}, ${game.colors.secondary}); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${game.name}</h3>
                    <p style="color: var(--text-secondary); margin-bottom: var(--space-lg); font-size: 0.9rem;">
                        ${game.description}
                    </p>
                    <div style="margin-bottom: var(--space-lg);">
                        ${game.features.map(feature => `<span style="color: var(--success-color); font-weight: 600;">${feature}</span>`).join(' ')}
                    </div>
                    <a href="${game.page}" class="btn btn-primary">See Plans</a>
                </div>
            </div>
        `).join('');
    }

    // Safe background application for hero sections
    applyHeroBackground(heroSelector, pageType = 'homepage') {
        const heroSection = document.querySelector(heroSelector);
        if (!heroSection || !this.configs.site.images.heroBackground) return;
        
        // Create background element
        const bgElement = document.createElement('div');
        bgElement.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('${this.configs.site.images.heroBackground}');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            z-index: 1;
            opacity: 0.3;
        `;
        
        // Make hero section relative and insert background
        heroSection.style.position = 'relative';
        heroSection.style.overflow = 'hidden';
        heroSection.insertBefore(bgElement, heroSection.firstChild);
        
        // Ensure content stays above background
        const heroContent = heroSection.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.position = 'relative';
            heroContent.style.zIndex = '2';
        }
    }

    // Generate hero section with background image - FIXED
    renderHero(pageType = 'homepage') {
        const hero = this.configs.advertising.heroBanners[pageType];
        const siteHero = this.configs.site.hero;
        const bgImage = this.configs.site.images.heroBackground;
        
        let badgeHtml = '';
        if (hero && hero.show) {
            badgeHtml = `<div class="mb-md">
                <span style="color: var(--accent-color); font-weight: 600; font-size: 1.1rem; animation: pulse 2s ease-in-out infinite;">${hero.badge.icon} ${hero.badge.text}</span>
            </div>`;
        }

        return `
            <div class="hero-content animate-fadeInUp" style="position: relative; z-index: 2; background: rgba(0,0,0,0.6); padding: var(--space-3xl); border-radius: var(--radius-lg); backdrop-filter: blur(5px);">
                ${badgeHtml}
                <h1 class="hero-title">${siteHero.title}</h1>
                <p class="hero-subtitle">${siteHero.subtitle}</p>
                <div class="hero-actions">
                    <a href="${siteHero.primaryButton.href}" class="btn btn-primary btn-lg">${siteHero.primaryButton.text}</a>
                    <a href="${siteHero.secondaryButton.href}" class="btn btn-secondary btn-lg">${siteHero.secondaryButton.text}</a>
                </div>
            </div>
        `;
    }

    // Generate performance showcase with images
    renderPerformanceShowcase(gameType = 'general') {
        const images = this.configs.games.gameImages;
        let performanceImage = images.performanceHardware;
        
        if (gameType === 'minecraft') {
            performanceImage = images.minecraft.performance;
        } else if (gameType === 'fivem') {
            performanceImage = images.fivem.performance;
        }

        return `
            <div class="grid grid-cols-2 items-center gap-xl">
                <div class="animate-slideInLeft">
                    <h5 style="color: var(--primary-color); font-weight: 600; margin-bottom: var(--space-sm);">🚀 Performance</h5>
                    <h2 class="mb-lg">Built for ${gameType === 'general' ? 'Gaming' : gameType.charAt(0).toUpperCase() + gameType.slice(1)}</h2>
                    <p class="mb-lg">
                        Our servers are optimized specifically for ${gameType === 'general' ? 'gaming' : gameType} to provide the best performance and lowest latency.
                    </p>
                    ${this.renderStats()}
                </div>
                <div class="animate-fadeInUp">
                    <img src="${performanceImage}" alt="${gameType} Performance" style="width: 100%; border-radius: var(--radius-lg); box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
                </div>
            </div>
        `;
    }

    // Generate control panel showcase
    renderControlPanelShowcase() {
        const controlPanelImage = this.configs.games.gameImages.controlPanel;
        
        return `
            <div class="card card-glass">
                <div class="grid grid-cols-2 items-center gap-xl">
                    <div>
                        <h3 style="color: white; margin-bottom: var(--space-lg);">🎛️ Modern Control Panel</h3>
                        <p style="color: #b8bcc8; margin-bottom: var(--space-lg);">
                            Manage your servers with our intuitive control panel. Start, stop, restart, and configure everything with just a few clicks.
                        </p>
                        <ul style="color: #b8bcc8; list-style: none; padding: 0;">
                            <li style="margin-bottom: var(--space-sm);">✅ One-click server management</li>
                            <li style="margin-bottom: var(--space-sm);">✅ Real-time performance monitoring</li>
                            <li style="margin-bottom: var(--space-sm);">✅ File manager & FTP access</li>
                            <li style="margin-bottom: var(--space-sm);">✅ Automatic backups & restore</li>
                        </ul>
                    </div>
                    <div class="animate-fadeInUp">
                        <img src="${controlPanelImage}" alt="Control Panel" style="width: 100%; border-radius: var(--radius-lg); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                    </div>
                </div>
            </div>
        `;
    }

    // Generate hero section (original method for compatibility)
    renderHeroSimple(pageType = 'homepage') {
        const hero = this.configs.advertising.heroBanners[pageType];
        const siteHero = this.configs.site.hero;
        
        let badgeHtml = '';
        if (hero && hero.show) {
            badgeHtml = `<div class="mb-md">
                <span style="color: var(--accent-color); font-weight: 600; font-size: 1.1rem; animation: pulse 2s ease-in-out infinite;">${hero.badge.icon} ${hero.badge.text}</span>
            </div>`;
        }

        return `
            <div class="hero-content animate-fadeInUp">
                ${badgeHtml}
                <h1 class="hero-title">${siteHero.title}</h1>
                <p class="hero-subtitle">${siteHero.subtitle}</p>
                <div class="hero-actions">
                    <a href="${siteHero.primaryButton.href}" class="btn btn-primary btn-lg">${siteHero.primaryButton.text}</a>
                    <a href="${siteHero.secondaryButton.href}" class="btn btn-secondary btn-lg">${siteHero.secondaryButton.text}</a>
                </div>
            </div>
        `;
    }

    // Generate trust badges
    renderTrustBadges() {
        const badges = this.configs.advertising.trustBadges;
        return badges.map(badge => `
            <div class="card">
                <div style="font-size: 3rem; margin-bottom: var(--space-md); text-align: center;">${badge.icon}</div>
                <h4 style="color: white; margin-bottom: var(--space-sm); text-align: center;">${badge.title}</h4>
                <p style="color: #b8bcc8; font-size: var(--font-sm); text-align: center;">${badge.description}</p>
            </div>
        `).join('');
    }

    // Generate stats
    renderStats() {
        const stats = this.configs.site.stats;
        return stats.map(stat => `
            <div style="text-align: center;">
                <div style="font-size: var(--font-3xl); font-weight: 800; color: var(--primary); margin-bottom: var(--space-xs);">${stat.value}</div>
                <div style="color: #b8bcc8; font-size: var(--font-sm);">${stat.label}</div>
            </div>
        `).join('');
    }

    // Generate CTA section
    renderCTA(pageType = 'homepage') {
        const cta = this.configs.advertising.ctaSections[pageType];
        return `
            <div class="card card-glass text-center" style="padding: var(--space-3xl);">
                <h2 style="margin-bottom: var(--space-lg); font-size: var(--font-4xl);">${cta.title}</h2>
                <p style="margin-bottom: var(--space-xl); color: #b8bcc8; max-width: 600px; margin: 0 auto;">
                    ${cta.subtitle}
                </p>
                <div class="flex gap-md justify-center flex-wrap">
                    <a href="${cta.primaryButton.href}" class="btn btn-primary btn-xl">${cta.primaryButton.text}</a>
                    <a href="${cta.secondaryButton.href}" class="btn btn-outline btn-xl">${cta.secondaryButton.text}</a>
                </div>
            </div>
        `;
    }

    // Generate feature highlights
    renderFeatureHighlights() {
        const features = this.configs.advertising.featureHighlights;
        return features.map(feature => `
            <div class="card">
                <h3 style="color: white; margin-bottom: var(--space-lg); display: flex; align-items: center; gap: var(--space-md);">
                    <span style="font-size: 2rem;">${feature.icon}</span>
                    ${feature.title}
                </h3>
                <p style="color: #b8bcc8; line-height: 1.6;">
                    ${feature.description}
                </p>
            </div>
        `).join('');
    }
}

// Initialize configuration system
window.configSystem = {
    load: loadConfigs,
    renderer: null,
    
    async init() {
        const configs = await this.load();
        if (configs) {
            this.renderer = new ConfigRenderer(configs);
            return configs;
        }
        return null;
    }
};
