// Advertising Configuration - Easy way to manage promotions, discounts, and banners
const advertisingConfig = {
    // Current promotions
    promotions: {
        active: true,
        code: "10OFF",
        discount: 10,
        description: "Use Code: 10OFF for 10% OFF",
        validUntil: "2024-12-31",
        appliesTo: ["all", "new-customers"], // "all", "new-customers", "existing-customers"
        exclusions: ["enterprise-plans"] // plan types excluded from discount
    },

    // Hero banners
    heroBanners: {
        homepage: {
            show: true,
            badge: {
                text: "Enterprise-Grade Hosting",
                icon: "🚀"
            }
        },
        gamesPage: {
            show: true,
            badge: {
                text: "Use Code: 10OFF for 10% OFF",
                icon: "🎮"
            }
        },
        minecraftPage: {
            show: true,
            badge: {
                text: "Use Code: 10OFF for 10% OFF",
                icon: "⛏️"
            }
        }
    },

    // Call-to-action sections
    ctaSections: {
        homepage: {
            title: "Ready to Get Started?",
            subtitle: "Join thousands of gamers who trust VistaCloud for reliable hosting. Start your free trial today - no credit card required.",
            primaryButton: {
                text: "Start Free Trial",
                href: "https://portal.sunnynodes.com/"
            },
            secondaryButton: {
                text: "Join Discord", 
                href: "https://discord.gg/5FUN22xqtW"
            }
        },
        gamesPage: {
            title: "Ready to Start Gaming?",
            subtitle: "Join thousands of gamers who trust VistaCloud for reliable game server hosting. Use code 10OFF for 10% off your first month!",
            primaryButton: {
                text: "Start Your Server",
                href: "https://portal.sunnynodes.com/"
            },
            secondaryButton: {
                text: "Join Discord",
                href: "https://discord.gg/5FUN22xqtW"
            }
        },
        minecraftPage: {
            title: "Start Your Minecraft Adventure",
            subtitle: "Join thousands of Minecraft players who trust VistaCloud for reliable hosting. Use code 10OFF for 10% off your first month!",
            primaryButton: {
                text: "Start Your Server",
                href: "https://portal.sunnynodes.com/"
            },
            secondaryButton: {
                text: "Join Discord",
                href: "https://discord.gg/5FUN22xqtW"
            }
        }
    },

    // Special offers
    specialOffers: [
        {
            id: "summer-sale",
            name: "Summer Sale",
            discount: 20,
            code: "SUMMER20",
            description: "Get 20% off all plans this summer!",
            startDate: "2024-06-01",
            endDate: "2024-08-31",
            active: false,
            appliesTo: ["all"]
        },
        {
            id: "new-customer",
            name: "New Customer Special",
            discount: 15,
            code: "NEW15",
            description: "New customers get 15% off their first month!",
            startDate: "2024-01-01",
            endDate: "2024-12-31",
            active: false,
            appliesTo: ["new-customers"]
        }
    ],

    // Announcement banners
    announcements: [
        {
            id: "new-games",
            text: "🎮 Now hosting Rust and CS:GO servers!",
            type: "info",
            active: false,
            dismissible: true
        },
        {
            id: "maintenance",
            text: "🔧 Scheduled maintenance tonight 2-4 AM EST",
            type: "warning",
            active: false,
            dismissible: true
        }
    ],

    // Social proof and testimonials
    socialProof: {
        customerCount: "50,000+",
        uptimeGuarantee: "99.9%",
        supportResponse: "<1 hour",
        serverLocations: "15+"
    },

    // Trust indicators
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
    ],

    // Feature highlights
    featureHighlights: [
        {
            icon: "⚡",
            title: "Instant Deployment",
            description: "Your server is ready in under 60 seconds. No waiting, no setup hassle. Just click and play."
        },
        {
            icon: "🛡️",
            title: "Enterprise DDoS Protection",
            description: "Advanced multi-layer protection keeps your server online during the largest attacks."
        },
        {
            icon: "💾",
            title: "Automatic Backups",
            description: "Daily automated backups with one-click restore. Never lose your progress again."
        },
        {
            icon: "🌍",
            title: "Global Locations",
            description: "15+ data centers worldwide for the lowest ping and best performance for your players."
        }
    ]
};
