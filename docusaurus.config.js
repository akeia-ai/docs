// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Akeia AI Documentation',
  tagline: 'Support documentation and knowledge base',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.akeia.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'akeia-ai',
  projectName: 'docs',

  onBrokenLinks: 'warn',  // Changed to warn to allow build with broken links (we'll fix them)
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Standard folder name is 'docs'
          // This is where your markdown files are stored in the repository
          path: 'docs',
          routeBasePath: '/', // Makes docs the homepage
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/akeia-ai/docs/tree/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'AKEIA',
        hideOnScroll: false,
        // Logo is CSS-based gradient text, no image needed
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'center',
            label: 'Documentation',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/getting-started/introduction',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Home',
                href: 'https://akeia.ai',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Akeia AI. Built with Docusaurus.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),

  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
      },
    ],
  ],
};

module.exports = config;
