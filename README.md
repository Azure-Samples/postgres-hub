# PostgreSQL Hub for Azure Developers

Your one‑stop shop for everything Application Development with PostgreSQL on Azure, especially for building AI applications and agents:

- **Samples and solution accelerators**: Production-ready code templates and reference architectures in Python, JavaScript, and C# to jumpstart your projects
- **Documentation**: In-depth guides and tutorials
- **Videos & Blogs**: Engaging, informative content
- **Workshops & Trainings**: Hands-on sessions to build practical skills with PostgreSQL on Azure
- **Learning pathways**: Accelerate your PostgreSQL development journey on Azure
- **Community support**: Connect with the community and get help

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## How to Contribute

Want to contribute? We'd love to have you on board. Check out the [Contributing](./CONTRIBUTING.md) guide to get started.

Even if you're not ready to contribute code, your feedback is valuable! You can share your thoughts by [opening an issue](https://github.com/Azure-Samples/postgres-hub/issues/new?template=feedback.md) and selecting the **Feedback** template.

### Updating the Website

Need to make changes to the site? Here's a quick reference for where to look. 

| What you want to do | Where to make changes |
|---|---|
| Add or remove resources (tutorials, samples, docs) | `static/templates.json` |
| Configure Quick Links, Pathways, Community Sections, or site metadata | `docusaurus.config.js` |
| Create new filtering tags | `src/data/tags.tsx` |
| Modify UI components (layout, styling, functionality) | `src/components/` |
| Update site navigation or header | `src/theme/Navbar/` |
| Customize visual styles and branding | CSS modules in `src/` |

For more detailed guidance, see [ONBOARDING.md](./ONBOARDING.md).

### Getting Started

This site is built with [Docusaurus 2](https://docusaurus.io/). Follow the steps below to set up a local development environment and preview your changes.

**Pre-requisites**: You'll need [Node.js](https://nodejs.org/) (v18+) and [Yarn](https://yarnpkg.com/) installed.

```bash
yarn          # Install dependencies
yarn start    # Start local dev server with live reload
yarn build    # Generate production build
```

To deploy to GitHub Pages:

```bash
USE_SSH=true yarn deploy                    # Using SSH
GIT_USER=<Your GitHub username> yarn deploy # Not using SSH
```
