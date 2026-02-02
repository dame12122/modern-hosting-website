// Pricing Configuration - Easy way to update all pricing
const pricingConfig = {
    // Main Pricing Plans (from index.html)
    plans: [
        {
            name: "Starter",
            price: 8,
            period: "month",
            badge: null,
            featured: false,
            features: [
                "2 GB RAM",
                "2 CPU Cores", 
                "40 GB NVMe Storage",
                "Unlimited Bandwidth",
                "Basic DDoS Protection",
                "24/7 Support"
            ],
            buttonText: "Get Started",
            buttonStyle: "btn-outline"
        },
        {
            name: "Professional",
            price: 20,
            period: "month",
            badge: "MOST POPULAR",
            featured: true,
            features: [
                "4 GB RAM",
                "4 CPU Cores",
                "80 GB NVMe Storage", 
                "Unlimited Bandwidth",
                "Advanced DDoS Protection",
                "Priority Support",
                "Free Backups",
                "Custom Domains"
            ],
            buttonText: "Get Started",
            buttonStyle: "btn-primary"
        },
        {
            name: "Enterprise",
            price: 40,
            period: "month",
            badge: null,
            featured: false,
            features: [
                "8 GB RAM",
                "6 CPU Cores",
                "160 GB NVMe Storage",
                "Unlimited Bandwidth", 
                "Enterprise DDoS Protection",
                "Dedicated Support",
                "Custom Solutions",
                "SLA Guarantee"
            ],
            buttonText: "Contact Sales",
            buttonStyle: "btn-outline"
        }
    ],

    // Games Page Pricing (from Games.html)
    gamesPagePlans: [
        {
            name: "Starter",
            price: 5,
            period: "month",
            badge: null,
            featured: false,
            features: [
                "2 GB RAM",
                "Unlimited Slots",
                "20 GB NVMe Storage",
                "Basic DDoS Protection",
                "99% Uptime",
                "Email Support"
            ],
            buttonText: "Get Started",
            buttonStyle: "btn-secondary"
        },
        {
            name: "Professional",
            price: 15,
            period: "month",
            badge: "MOST POPULAR",
            featured: true,
            features: [
                "6 GB RAM",
                "Unlimited Slots",
                "80 GB NVMe Storage",
                "Advanced DDoS Protection",
                "99.9% Uptime",
                "Priority Support",
                "Free Domain"
            ],
            buttonText: "Get Started",
            buttonStyle: "btn-primary"
        },
        {
            name: "Enterprise",
            price: 30,
            period: "month",
            badge: null,
            featured: false,
            features: [
                "12 GB RAM",
                "Unlimited Slots",
                "160 GB NVMe Storage",
                "Enterprise DDoS Protection",
                "99.99% Uptime",
                "24/7 Support",
                "Custom Solutions"
            ],
            buttonText: "Contact Sales",
            buttonStyle: "btn-secondary"
        }
    ],

    // Game-specific pricing (from actual HTML files)
    gamePricing: {
        minecraft: {
            plans: [
                {
                    name: "Basic",
                    price: 3,
                    slots: "Unlimited Players",
                    ram: "1 GB",
                    storage: "10 GB",
                    features: ["Basic Protection", "Daily Backups"]
                },
                {
                    name: "Starter", 
                    price: 6,
                    slots: "Unlimited Players",
                    ram: "2 GB", 
                    storage: "20 GB",
                    features: ["Advanced Protection", "Daily Backups", "One-Click Mods"]
                },
                {
                    name: "Premium",
                    price: 12,
                    slots: "Unlimited Players", 
                    ram: "4 GB",
                    storage: "40 GB",
                    features: ["Enterprise Protection", "Hourly Backups", "One-Click Mods", "Priority Support"]
                },
                {
                    name: "Extreme",
                    price: 24,
                    slots: "Unlimited Players",
                    ram: "8 GB", 
                    storage: "80 GB",
                    features: ["Enterprise Protection", "Real-time Backups", "One-Click Mods", "24/7 Support", "Free Domain"]
                }
            ]
        },
        fivem: {
            plans: [
                {
                    name: "Starter",
                    price: 15,
                    slots: "32 Players",
                    ram: "4 GB",
                    storage: "80 GB", 
                    features: ["ESX & QBCore", "Instant Setup", "Basic Support", "DDoS Protection"]
                },
                {
                    name: "Professional",
                    price: 30,
                    slots: "64 Players",
                    ram: "8 GB",
                    storage: "160 GB",
                    features: ["ESX & QBCore", "Instant Setup", "Priority Support", "DDoS Protection", "Free Backups"]
                },
                {
                    name: "Enterprise",
                    price: 60,
                    slots: "128 Players",
                    ram: "16 GB", 
                    storage: "320 GB",
                    features: ["ESX & QBCore", "Instant Setup", "Dedicated Support", "DDoS Protection", "Free Backups", "Custom Solutions"]
                }
            ]
        },
        rust: {
            plans: [
                {
                    name: "Basic",
                    price: 12,
                    slots: "50 Players",
                    ram: "4 GB",
                    storage: "80 GB",
                    features: ["Oxide Support", "Instant Wipes", "Basic Support"]
                },
                {
                    name: "Professional",
                    price: 24,
                    slots: "100 Players", 
                    ram: "8 GB",
                    storage: "160 GB",
                    features: ["Oxide Support", "Instant Wipes", "Priority Support", "Free Backups"]
                },
                {
                    name: "Enterprise",
                    price: 48,
                    slots: "200 Players",
                    ram: "16 GB",
                    storage: "320 GB", 
                    features: ["Oxide Support", "Instant Wipes", "Dedicated Support", "Free Backups", "Custom Solutions"]
                }
            ]
        },
        csgo: {
            plans: [
                {
                    name: "Competitive",
                    price: 10,
                    slots: "10 Players",
                    tick: "128-tick",
                    features: ["128-tick Rate", "Custom Maps", "SourceMod", "Basic Support"]
                },
                {
                    name: "Tournament",
                    price: 20,
                    slots: "12 Players", 
                    tick: "128-tick",
                    features: ["128-tick Rate", "Custom Maps", "SourceMod", "Priority Support", "Free Backups"]
                },
                {
                    name: "Professional",
                    price: 40,
                    slots: "16 Players",
                    tick: "128-tick", 
                    features: ["128-tick Rate", "Custom Maps", "SourceMod", "Dedicated Support", "Free Backups", "Custom Configs"]
                }
            ]
        },
        gmod: {
            plans: [
                {
                    name: "Sandbox",
                    price: 8,
                    slots: "20 Players",
                    ram: "4 GB",
                    storage: "80 GB",
                    features: ["Workshop Support", "FastDL", "Basic Support"]
                },
                {
                    name: "Community",
                    price: 16,
                    slots: "40 Players",
                    ram: "8 GB", 
                    storage: "160 GB",
                    features: ["Workshop Support", "FastDL", "Priority Support", "Free Backups"]
                },
                {
                    name: "Network",
                    price: 32,
                    slots: "80 Players",
                    ram: "16 GB",
                    storage: "320 GB",
                    features: ["Workshop Support", "FastDL", "Dedicated Support", "Free Backups", "Custom Solutions"]
                }
            ]
        },
        bots: {
            plans: [
                {
                    name: "Basic",
                    price: 5,
                    memory: "512 MB",
                    cpu: "1 Core",
                    features: ["24/7 Hosting", "Auto Restart", "Basic Support"]
                },
                {
                    name: "Professional",
                    price: 10,
                    memory: "1 GB",
                    cpu: "2 Cores", 
                    features: ["24/7 Hosting", "Auto Restart", "Priority Support", "Performance Monitoring"]
                },
                {
                    name: "Enterprise",
                    price: 20,
                    memory: "2 GB",
                    cpu: "4 Cores",
                    features: ["24/7 Hosting", "Auto Restart", "Dedicated Support", "Performance Monitoring", "Custom Solutions"]
                }
            ]
        }
    },

    // Currency settings
    currency: {
        symbol: "$",
        code: "USD",
        position: "before" // "before" or "after"
    },

    // Billing periods
    periods: {
        month: 1,
        quarter: 3,
        year: 12
    },

    // Discounts for longer periods
    discounts: {
        quarter: 0.1, // 10% off
        year: 0.2     // 20% off
    }
};
