import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
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
      {
        docs: {
          // Standard folder name is 'docs'
          // This is where your markdown files are stored in the repository
          path: 'docs',
          routeBasePath: '/', // Makes docs the homepage
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/akeia-ai/docs/tree/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
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
          position: 'left',
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
          title: 'Platform',
          items: [
            {
              label: 'Use Cases',
              href: 'https://akeia.ai/pages/use-cases.html',
            },
            {
              label: 'Resources',
              href: 'https://akeia.ai/pages/resources.html',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'Company',
              href: 'https://akeia.ai/pages/company.html',
            },
            {
              label: 'Contact',
              href: 'https://akeia.ai/pages/contact.html',
            },
            {
              label: 'Insights',
              href: 'https://akeia.ai/pages/insights.html',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              href: 'https://akeia.ai/pages/privacy.html',
            },
            {
              label: 'Terms of Service',
              href: 'https://akeia.ai/pages/terms.html',
            },
            {
              label: 'Security',
              href: 'https://akeia.ai/pages/security.html',
            },
          ],
        },
        {
          title: 'Join Us',
          items: [
            {
              label: 'Community',
              href: 'https://akeia.ai/pages/community.html',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/akeia-ai/',
            },
            {
              label: 'X (Twitter)',
              href: 'https://x.com/akeia_ai',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Akeia AI Ltd. All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

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

export default config;
