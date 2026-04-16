// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// Updated for GitHub Pages deployment - trigger pipeline

import { themes as prismThemes } from "prism-react-renderer";
import { manageCookieLabel } from "./constants.js";

/** @type {import('@docusaurus/types').Config} */
const config = {
  customFields: {
    description:
      "Build scalable, secure, intelligent, and high-performance applications with PostgreSQL on Azure. Get started with our comprehensive documentation, samples, and community resources.",
    disclaimerSection: {
      title: "PostgreSQL Hub for Azure Developers",
      description:
        "Build scalable, secure, intelligent, and high-performance applications with PostgreSQL on Azure. Get started with our comprehensive documentation, samples, and community resources.",
    },
    quickLinks: [
      {
        icon: "img/postgres.svg",
        color: "#9a14fa",
        label: "Azure Database for PostgreSQL Homepage",
        description: "Explore product features, documentation, and pricing",
        href: "http://aka.ms/postgres",
      },
      {
        icon: "img/horizon-db.svg",
        label: "Azure HorizonDB Homepage",
        description: "Explore product overview, features, and documentation",
        href: "https://aka.ms/AzureHorizonDB",
      },
      {
        icon: "FileText",
        color: "#6f2c91",
        label: "Documentation",
        description: "Concepts, tutorials, guides and API references",
        href: "https://aka.ms/postgresqldocs",
      },
      {
        icon: "NotepadText",
        color: "#04a841",
        label: "Blog",
        description: "Product updates, customer stories, and best practices.",
        href: "https://aka.ms/azurepostgresblog",
      },
      {
        icon: "GraduationCap",
        color: "#f54a00",
        label: "Microsoft Learn",
        description: "Structured trainings and learning modules",
        href: "https://learn.microsoft.com/training/paths/build-ai-apps-azure-database-postgresql/",
      },
      {
        icon: "BookOpen",
        color: "#1960fc",
        label: "AI eBook",
        description: "Guide to building AI apps and agents",
        href: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/azure/acom/documents/pdfs/en-us/azure-postgresql-no-ai-without-data-ebook-082225-aac.pdf",
      },
      {
        icon: "Gift",
        color: "#9a14fa",
        label: "Try PostgreSQL for free",
        description: "Free access for 12 months with an Azure free account.",
        href: "https://azure.microsoft.com/pricing/free-services/",
      },
    ],
    learningPathsSection: {
      paths: [
        {
          icon: "Database",
          iconColor: "#0078d4",
          title: "Developing Core Applications",
          description:
            "Master the fundamentals of building production-ready applications with PostgreSQL on Azure",
          level: "Beginner",
          duration: "2-3 hours",
          tags: ["Database Setup", "Connection Management", "App Integrations", "Best Practices"],
          filterTag: "developing-core-applications",
        },
        {
          icon: "Bot",
          iconColor: "#157f15",
          title: "Building Generative AI Apps",
          description:
            "Build intelligent apps with PostgreSQL using vector search, in-SQL AI functions, and popular AI frameworks.",
          level: "Intermediate",
          duration: "3-4 hours",
          tags: ["Vector Extension", "Foundry Integration", "AI Functions", "RAG"],
          filterTag: "building-genai-apps",
        },
        {
          icon: "Layers",
          iconColor: "#5c2d91",
          title: "Building AI Agents",
          description:
            "Create sophisticated AI agents that leverage PostgreSQL for knowledge retrieval, memory and data persistence.",
          level: "Intermediate",
          duration: "2-3 hours",
          tags: ["Agent Architecture", "MCP", "Foundry Integration", "Multi-agent Coordination"],
          filterTag: "building-ai-agents",
        },
      ],
    },
    communitySupportSection: {
      title: "Community & Support",
      description:
        "Connect with fellow developers, get support, and stay tuned with the latest updates in the PostgreSQL ecosystem on Azure.",
      cards: [
        {
          title: "Contact Us",
          desc: "Reach out to us for questions, feedback, or support.",
          icon: "Mail",
          actions: [
            {
              label: "Email",
              href: "mailto:AskAzurePostgreSQL@microsoft.com",
              variant: "outlined",
              icon: "Mail",
            },
            {
              label: "Technical Support",
              href: "https://azure.microsoft.com/support/",
              variant: "outlined",
              icon: "ExternalLink",
            },
            {
              label: "Submit Your Ideas",
              href: "https://aka.ms/pgfeedback",
              variant: "outlined",
              icon: "Lightbulb",
            }
          ],
        },
        {
          title: "Stay Tuned",
          desc: "Stay updated with the latest news, tips, and announcements.",
          icon: "Bell",
          actions: [
            {
              href: "https://www.linkedin.com/company/azure-database-for-postgresql/",
              icon: "img/brand-linkedin.svg",
            },
            {
              href: "https://x.com/AzureDBPostgres",
              icon: "X",
            },
            {
              href: "https://aka.ms/azurepostgresblog",
              icon: "BookOpen",
            },
          ],
        },
        {
          title: "Join the Community",
          desc: "Coming soon: A community forum for PostgreSQL app developers on Azure. Stay tuned.",
          icon: "Users",
          iconColor: "#20b256",
          iconBg: "#e6f7ed",
          actions: [],
        },
        // {
        //   title: "How to Contribute",
        //   desc: "Help improve Azure PostgreSQL documentation, samples, and tooling.",
        //   icon: "Handshake",
        //   iconColor: "#543ef6",
        //   iconBg: "#edeafd",
        //   actions: [{ label: "Contribute Guide", href: "/contribute" }],
        // },
        // {
        //   title: "Submit Your Ideas",
        //   desc: "Share feedback, request features, and vote on improvements to Azure PostgreSQL.",
        //   icon: "Lightbulb",
        //   iconColor: "#9a15fa",
        //   iconBg: "#f5e6fd",
        //   actions: [
        //     { label: "Submit Idea", href: "https://aka.ms/pgfeedback" },
        //   ],
        // },
        {
          title: "Events & Webinars",
          desc: "",
          icon: "Calendar",
          iconColor: "#ea252d",
          iconBg: "#fdeaea",
          events: [
            {
              title: "POSETTE: An Event for Postgres 2026",
              description:
                "A virtual developer event for all things Postgres.",
              date: "June 16-18, 2026",
              href: "https://aka.ms/posette"
            }
            // {
            //   title: "PostgreSQL Performance Optimization",
            //   description:
            //     "Best practices for optimizing your PostgreSQL database performance",
            //   date: "December 5, 2025",
            //   time: "10:00 AM PST",
            // },
          ],
          actions: [],
        },
      ],
    },
  },

  title: "PostgreSQL Hub",
  tagline: "Discover - Create - Contribute",
  url: "https://azure-samples.github.io",
  baseUrl: "/postgres-hub/",
  favicon: "img/logo.png",
  organizationName: "Azure-Samples",
  projectName: "postgres-hub",
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  scripts: [
    "https://js.monitor.azure.com/scripts/c/ms.analytics-web-4.min.js",
    "https://wcpstatic.microsoft.com/mscc/lib/v2/wcp-consent.js",
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        hideOnScroll: true,
        title: "PostgreSQL Hub",
        logo: {
          alt: "Azure PostgreSQL App logo",
          src: "img/logo.png",
          href: "/",
          target: "_self",
          width: 32,
          height: 32,
        },
        items: [
          {
            type: "custom-NavbarButton",
            position: "right",
          },
          // {
          //   type: "custom-NavbarButtonGithub",
          //   href: "https://github.com/NucleoidJS/Nucleoid",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            label: "Privacy & Cookies",
            to: "https://privacy.microsoft.com/privacystatement",
          },
          {
            label: manageCookieLabel,
            to: " ",
          },
          {
            label: "Built With Docusaurus",
            to: "https://docusaurus.io",
          },
          {
            label: ` © ${new Date().getFullYear()} Microsoft`,
            to: "https://microsoft.com",
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
      },
    }),

  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],

  headTags: [
    // Preconnect to Google Fonts for Roboto
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
    // Load Roboto font
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
      },
    },
    // DNS prefetch for external resources
    {
      tagName: "link",
      attributes: {
        rel: "dns-prefetch",
        href: "https://api.github.com",
      },
    },
    // Optimize rendering
    {
      tagName: "meta",
      attributes: {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
      },
    },
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        blog: {
          showReadingTime: true,
          routeBasePath: "blog",
          blogTitle: "PostgreSQL Hub Blog",
          blogDescription:
            "Latest updates, community stories, and developer news",
          feedOptions: {
            type: "all", // 'rss' | 'atom' | 'all'
            title: "PostgreSQL Hub Blog RSS Feed",
            description:
              "Stay updated with new blog posts from PostgreSQL Hub for Azure Developers",
            language: "en",
            copyright: `Copyright © ${new Date().getFullYear()} Microsoft`,
          },
        },
        gtag: {
          trackingID: "G-CNSKHL41CT",
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

module.exports = config;
