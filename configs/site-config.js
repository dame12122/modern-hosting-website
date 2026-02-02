// Site Configuration - Easy way to update branding and basic info
const siteConfig = {
    // Company Information
    company: {
        name: "VistaCloud",
        tagline: "Premium Game Server Hosting That Actually Works",
        description: "Premium game server hosting with blazing fast performance, 99% uptime, and DDoS protection",
        copyright: "© 2024 VistaCloud. All Rights Reserved. | Enterprise Game Server Hosting"
    },

    // Contact Information
    contact: {
        email: "support@vistacloud.org",
        discord: "https://discord.gg/5FUN22xqtW",
        portal: "https://portal.sunnynodes.com/",
        phone: "",
        address: ""
    },

    // SEO & Meta
    seo: {
        title: "VistaCloud - Premium Game Server Hosting",
        keywords: "game server hosting, minecraft hosting, fivem hosting, gaming servers, vps hosting",
        description: "VistaCloud - Premium Game Server Hosting with blazing fast performance, 99% uptime, and DDoS protection",
        ogImage: "images/og-image.jpg",
        favicon: "images/favicon.ico",
        themeColor: "#6366f1"
    },

    // Navigation Menu
    navigation: [
        { name: "Home", href: "#home", active: true },
        { name: "Games", href: "#games", active: false },
        { name: "Enterprise", href: "#enterprise", active: false },
        { name: "Information", href: "#information", active: false },
        { name: "Login", href: "https://portal.sunnynodes.com/", external: true }
    ],

    // Footer Links
    footerLinks: [
        { name: "Home", href: "index.html" },
        { name: "Games", href: "Games.html" },
        { name: "Discord", href: "https://discord.gg/5FUN22xqtW" },
        { name: "Contact", href: "mailto:support@vistacloud.org" },
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" }
    ],

    // Hero Section
    hero: {
        badge: {
            text: "Enterprise-Grade Hosting",
            icon: "🚀"
        },
        title: "Premium Game Server Hosting That <span style=\"background: linear-gradient(135deg, var(--primary), var(--secondary)); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;\">Actually Works</span>",
        subtitle: "Join 50,000+ gamers who trust VistaCloud for reliable, high-performance game servers. 99.9% uptime guarantee, instant deployment, and 24/7 expert support.",
        primaryButton: {
            text: "Start Free Trial",
            href: "#pricing"
        },
        secondaryButton: {
            text: "View Games",
            href: "#games"
        }
    },

    // Stats (Hero section numbers)
    stats: [
        { value: "99.9%", label: "Uptime Guarantee" },
        { value: "<30ms", label: "Average Ping" },
        { value: "24/7", label: "Expert Support" },
        { value: "50K+", label: "Happy Gamers" }
    ],

    // Images & Assets
    images: {
        logo: "images/logo.webp",
        favicon: "images/favicon.ico",
        ogImage: "images/og-image.jpg",
        heroBackground: "images/hero-background.png",
        controlPanel: "images/control-panel.png",
        performanceHardware: "images/performance-hardware.png"
    },

    // Trust Badges
    trustBadges: [
        {
            icon: "🏆",
            title: "Industry Leader",
            description: "Award-winning hosting platform"
        },
        {
            icon: "🛡️",
            title: "Enterprise Security",
            description: "Bank-level DDoS protection"
        },
        {
            icon: "⚡",
            title: "Lightning Fast",
            description: "NVMe SSD storage globally"
        },
        {
            icon: "🌍",
            title: "Global Network",
            description: "15+ data centers worldwide"
        }
    ]
};
