# Akeia AI Documentation

This repository contains the source code for the Akeia AI Documentation and Knowledge Base site, built with [Docusaurus](https://docusaurus.io/).

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Serve Locally

```bash
npm run serve
```

This command serves the built site locally for testing.

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

### Manual Deployment

The GitHub Actions workflow can also be triggered manually from the Actions tab in the GitHub repository.

## Project Structure

```
docs/
├── docs/                    # Documentation markdown files
│   ├── getting-started/    # Getting started guides
│   └── kb/                 # Knowledge base articles
├── src/
│   └── css/                # Custom CSS styles
├── static/                 # Static assets (images, etc.)
├── docusaurus.config.js     # Docusaurus configuration
├── sidebars.js             # Sidebar navigation configuration
└── package.json            # Dependencies and scripts
```

## Adding Documentation

1. Create a new markdown file in the appropriate folder under `docs/`
2. Add the file to `sidebars.js` to include it in navigation
3. Commit and push to `main` branch
4. GitHub Actions will automatically build and deploy

## Search

The site uses [@easyops-cn/docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local) for client-side search functionality. The search index is automatically generated during the build process.

## License

See LICENSE file for details.
