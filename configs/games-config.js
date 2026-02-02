// Games Configuration - Easy way to update game information, features, and descriptions
const gamesConfig = {
    // Supported games list
    supportedGames: [
        {
            id: "fivem",
            name: "FiveM",
            icon: "🚗",
            page: "FiveM.html",
            colors: {
                primary: "#6366f1",
                secondary: "#22d3ee"
            },
            description: "Multiplayer modification for GTAV with custom scripts and mods support",
            features: [
                "✓ Instant Setup",
                "✓ Custom Frameworks", 
                "✓ DDoS Protection"
            ],
            detailedDescription: "Professional FiveM hosting with custom frameworks, instant setup, and optimized performance for the best roleplay experience.",
            pricing: {
                startingAt: 15,
                currency: "$",
                period: "month"
            }
        },
        {
            id: "minecraft",
            name: "Minecraft",
            icon: "⛏️",
            page: "Minecraft.html",
            colors: {
                primary: "#f59e0b",
                secondary: "#dc2626"
            },
            description: "Build, explore, and survive in the world's most popular sandbox game",
            features: [
                "✓ Java & Bedrock",
                "✓ One-Click Mods",
                "✓ Free Backups"
            ],
            detailedDescription: "Java and Bedrock editions with one-click mod installation, automatic backups, and plugin management.",
            pricing: {
                startingAt: 3,
                currency: "$",
                period: "month"
            }
        },
        {
            id: "bots",
            name: "Discord Bots",
            icon: "🤖",
            page: "Bots.html",
            colors: {
                primary: "#22d3ee",
                secondary: "#6366f1"
            },
            description: "Host powerful Discord bots with 24/7 uptime and reliable performance",
            features: [
                "✓ 24/7 Uptime",
                "✓ Easy Deployment",
                "✓ Auto Restart"
            ],
            detailedDescription: "24/7 Discord bot hosting with auto-restart, performance monitoring, and easy deployment.",
            pricing: {
                startingAt: 5,
                currency: "$",
                period: "month"
            }
        },
        {
            id: "rust",
            name: "Rust",
            icon: "🔫",
            page: "Rust.html",
            colors: {
                primary: "#ef4444",
                secondary: "#f59e0b"
            },
            description: "Survive in a harsh open world with optimized Rust server hosting",
            features: [
                "✓ Oxide Support",
                "✓ Instant Wipes",
                "✓ Low Ping"
            ],
            detailedDescription: "High-performance Rust servers with Oxide support, instant wipes, and low-latency global locations.",
            pricing: {
                startingAt: 12,
                currency: "$",
                period: "month"
            }
        },
        {
            id: "gmod",
            name: "Garry's Mod",
            icon: "🔧",
            page: "Gmod.html",
            colors: {
                primary: "#6366f1",
                secondary: "#22d3ee"
            },
            description: "Physics sandbox game with endless modding possibilities",
            features: [
                "✓ Workshop Support",
                "✓ Addon Manager",
                "✓ FastDL"
            ],
            detailedDescription: "Workshop support, FastDL, and addon management for the ultimate sandbox gaming experience.",
            pricing: {
                startingAt: 8,
                currency: "$",
                period: "month"
            }
        },
        {
            id: "csgo",
            name: "CS:GO",
            icon: "💣",
            page: "CSGO.html",
            colors: {
                primary: "#f59e0b",
                secondary: "#ef4444"
            },
            description: "Competitive FPS gaming with low latency and stable servers",
            features: [
                "✓ 128 Tick",
                "✓ Custom Maps",
                "✓ Plugins Support"
            ],
            detailedDescription: "128-tick competitive servers with custom maps, SourceMod plugins, and tournament-ready performance.",
            pricing: {
                startingAt: 10,
                currency: "$",
                period: "month"
            }
        }
    ],

    // Game-specific features
    gameFeatures: {
        minecraft: {
            serverTypes: {
                java: {
                    name: "Java Edition",
                    icon: "☕",
                    description: "The original Minecraft experience with full mod support and customization",
                    supportedTypes: ["Vanilla", "Spigot", "PaperMC", "Fabric", "Forge", "Bukkit"]
                },
                bedrock: {
                    name: "Bedrock Edition",
                    icon: "📱",
                    description: "Play on mobile, console, and Windows 10 with cross-platform support",
                    features: ["Cross-platform play", "Mobile & Console support", "Add-ons support", "Marketplace content", "Realms-style gameplay", "Easy setup"]
                }
            },
            performance: {
                uptime: "99.9%",
                latency: "<1ms",
                storage: "NVMe SSD",
                support: "24/7"
            }
        },
        fivem: {
            frameworks: ["ESX", "QBCore", "Custom Frameworks"],
            features: ["Custom Scripts Support", "Voice Chat Compatibility", "Community Size Recommendations", "Instant Setup"],
            performance: {
                uptime: "99.9%",
                latency: "<30ms",
                storage: "NVMe SSD",
                support: "24/7"
            }
        },
        rust: {
            features: ["Oxide Support", "Instant Wipes", "Low Latency", "Global Locations"],
            performance: {
                uptime: "99.9%",
                latency: "<30ms",
                storage: "NVMe SSD",
                support: "24/7"
            }
        },
        csgo: {
            features: ["128-tick Rate", "Custom Maps", "SourceMod", "Tournament Ready"],
            performance: {
                uptime: "99.9%",
                latency: "<30ms",
                storage: "NVMe SSD",
                support: "24/7"
            }
        },
        gmod: {
            features: ["Workshop Support", "FastDL", "Addon Management", "Custom Content"],
            performance: {
                uptime: "99.9%",
                latency: "<30ms",
                storage: "NVMe SSD",
                support: "24/7"
            }
        },
        bots: {
            features: ["24/7 Hosting", "Auto Restart", "Performance Monitoring", "Easy Deployment"],
            performance: {
                uptime: "99.9%",
                response: "<100ms",
                support: "24/7"
            }
        }
    },

    // Game-specific images and assets
    gameImages: {
        minecraft: {
            performance: "images/minecraft-performance.png",
            screenshot: "images/minecraft-performance.png"
        },
        fivem: {
            performance: "images/fivem-performance.png",
            screenshot: "images/fivem-performance.png"
        },
        controlPanel: "images/control-panel.png",
        performanceHardware: "images/performance-hardware.png"
    },

    // Common features across all games
    commonFeatures: [
        {
            icon: "⚡",
            title: "Instant Setup",
            description: "Your server is ready to play in minutes, not hours"
        },
        {
            icon: "🛡️",
            title: "DDoS Protection",
            description: "Enterprise-grade protection keeps your server online"
        },
        {
            icon: "💾",
            title: "Auto Backups",
            description: "Automatic daily backups with one-click restore"
        },
        {
            icon: "🎛️",
            title: "Easy Control",
            description: "Modern control panel with intuitive management tools"
        }
    ],

    // Server locations
    serverLocations: [
        "United States (East)",
        "United States (West)", 
        "Europe (London)",
        "Europe (Frankfurt)",
        "Asia (Singapore)",
        "Australia (Sydney)",
        "Brazil (São Paulo)"
    ],

    // Support levels
    supportLevels: [
        {
            name: "Basic Support",
            responseTime: "24 hours",
            channels: ["Email", "Discord"]
        },
        {
            name: "Priority Support", 
            responseTime: "2 hours",
            channels: ["Email", "Discord", "Live Chat"]
        },
        {
            name: "Dedicated Support",
            responseTime: "<1 hour",
            channels: ["Email", "Discord", "Live Chat", "Phone", "Account Manager"]
        }
    ]
};
