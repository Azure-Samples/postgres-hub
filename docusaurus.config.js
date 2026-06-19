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
          title: "Building AI Apps and Agents with Azure Database for PostgreSQL",
          description:
            "Create intelligent solutions using vector search, in-SQL AI functions, and popular agentic frameworks.",
          level: "Intermediate",
          duration: "2-3 hours",
          tags: ["Vector Search", "Foundry Integration", "AI Functions", "RAG"],
          filterTag: "building-ai-apps-flex",
        },
        {
          icon: "Bot",
          iconColor: "#5c2d91",
          title: "Building AI Apps and Agents with Azure HorizonDB",
          description:
            "Learn how to leverage Azure HorizonDB's native AI capabilities, purpose-built for the AI era.",
          level: "Intermediate",
          duration: "3-4 hours",
          tags: ["AI Pipelines", "Model Management", "AI Functions", "Hybrid Search", "DiskANN"],
          filterTag: "building-ai-apps-horizondb",
        },
      ],
    },
    communitySupportSection: {
      title: "Community & Support",
      description:
        "Connect with fellow developers, get support, and stay tuned with the latest updates in the PostgreSQL ecosystem on Azure.",
      cards: [
        {
          title: "Join the Community",
          desc: "Share feedback, connect and collaborate with Microsoft engineers and other developers.",
          icon: "Users",
          iconColor: "#20b256",
          iconBg: "#e6f7ed",
          actions: [
            {
              label: "Developer Forum",
              href: "https://github.com/Azure-Samples/postgres-hub/discussions",
              variant: "outlined",
              icon: "MessagesSquare",
            },
            {
              label: "Real-time chat (Coming soon)",
              variant: "outlined",
              icon: "Radio",
            },
          ],
        },
        {
          title: "How to Contribute",
          desc: "Help improve this hub — suggest resources, fix issues, or add content.",
          icon: "Handshake",
          iconColor: "#543ef6",
          iconBg: "#edeafd",
          actions: [
            {
              label: "Submit a Resource",
              href: "https://github.com/Azure-Samples/postgres-hub/issues/new?template=add-resource.yml",
              variant: "outlined",
              icon: "Plus",
            },
            {
              label: "Report an Issue",
              href: "https://github.com/Azure-Samples/postgres-hub/issues/new?template=feedback.md",
              variant: "outlined",
              icon: "Bug",
            },
            {
              label: "Contribution Guide",
              href: "https://github.com/Azure-Samples/postgres-hub/blob/main/ONBOARDING.md",
              variant: "outlined",
              icon: "BookOpen",
            },
          ],
        },
        {
          title: "Stay Tuned",
          desc: "Stay updated with the latest news, tips, and announcements.",
          icon: "Bell",
          actions: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/azure-database-for-postgresql/",
              variant: "outlined",
              icon: "img/brand-linkedin.svg",
            },
            {
              label: "X",
              href: "https://x.com/AzureDBPostgres",
              variant: "outlined",
              icon: "X",
            },
            {
              label: "Blog",
              href: "https://aka.ms/azurepostgresblog",
              variant: "outlined",
              icon: "BookOpen",
            },
          ],
        },
        {
          title: "Events & Webinars",
          desc: "",
          icon: "Calendar",
          iconColor: "#ea252d",
          iconBg: "#fdeaea",
          events: [
            {
              title: "[Microsoft Build 2026] From rows to reasoning: Designing databases for AI apps and agents",
              description:
                "Demo-rich session covering latest innovations in Azure HorizonDB for AI apps built directly in the database.",
              date: "June 2-3, 2026",
              href: "https://build.microsoft.com/en-US/sessions/BRK223"
            },
            {
              title: "[Microsoft Build 2026] Simplify app dev with cloud-native PostgreSQL in Azure HorizonDB",
              description:
                "Learn to run hybrid vector queries, call managed AI models from SQL, and prototype agentic workflows.",
              date: "June 2-3, 2026",
              href: "https://build.microsoft.com/en-US/sessions/DEM364"
            },
            {
              title: "POSETTE: An Event for Postgres 2026",
              description:
                "A virtual developer event for all things Postgres.",
              date: "June 16-18, 2026",
              href: "https://aka.ms/posette"
            }
          ],
          actions: [],
        },
        {
          title: "Contact Us",
          desc: "Reach out to us for questions or support.",
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
            type: "custom-NavbarButtonGithub",
            position: "right",
          },
          {
            type: "custom-NavbarButton",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            label: "GitHub",
            to: "https://github.com/Azure-Samples/postgres-hub",
          },
          {
            label: "Privacy & Cookies",
            to: "https://privacy.microsoft.com/privacystatement",
          },
          {
            label: manageCookieLabel,
            to: " ",
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
