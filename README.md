# Spec Builder for Domain Experts

🚀 **[Live Demo](https://clarifymythoughts.com/)**

[![Open in Windsurf](https://img.shields.io/badge/Open%20in-Windsurf-blue.svg)](https://wind.surf)
## Overview

This specification builder is inspired by Sean Grove's talk "The New Code" (https://www.youtube.com/watch?v=8rABwKRsec4), which discusses the future of software development and the role of AI in coding. The app is designed to help domain experts (clinicians, lawyers, engineers, etc.) clarify their ideas and generate clear specifications that can be used for AI-assisted implementation.

## Purpose

The Spec Builder bridges the gap between domain expertise and technical implementation by:
- Guiding users through a structured specification process
- Ensuring requirements are clear and actionable
- Generating specifications that can be used for AI-assisted development
- Supporting various types of applications (forms, chatbots, etc.)

## Features

- **Interactive Form:** A step-by-step form to guide you through the specification process.
- **Dynamic Output:** Generates specs in multiple formats (Text, Markdown, JSON), only showing fields you've filled out.
- **Use Examples:** Pre-filled examples for each field to get you started.
- **Easy Clearing:** "Clear" buttons to reset individual fields.
- **Share & Download:** Easily download your generated spec as a `.txt`, `.md`, or `.json` file.
- **Responsive Design:** Works smoothly on both desktop and mobile devices.
- **Community Links:** Quick links to the GitHub repository and a "Buy Me a Coffee" page.

## How to Use

1. Open `index.html` in your web browser or navigate to the deployed site.
2. Follow the step-by-step form to describe your project
3. The app will generate a clear specification based on your inputs
4. Use the generated specification as input for AI-assisted development tools

## Running the Backend

1. Navigate to the `backend` folder
2. Run `npm install` to install dependencies
3. Start the server with `npm start` (or `node server.js`)

## Inspiration

This project is inspired by Sean Grove's vision of the future of coding, where domain experts can focus on what they know best while AI handles the technical implementation. The app aims to make this vision a reality by helping domain experts articulate their requirements clearly and systematically.

## Contributing

Feel free to fork this repository and submit pull requests with improvements or additional features.

## License

Copyright (c) 2025 Sum1Solutions, LLC

This project is released under a custom license that uses MIT License terms with an explicit equity stake condition for public companies. It is designed to:

1. Promote Open Innovation: The software is free to use for personal, non-profit, and private commercial projects.
2. Fund Other Kind Capitalism Projects like this one: Companies that are, or become, publicly traded while using this software or any work derived from it, must grant Sum1Solutions, LLC an equity stake 1% of total outstanding shares as of the date of the public listing or acquisition. This equity stake is open to negotiation and would likely be shared with other contributors to the project in a comensurate manner. This equity stake is non-transferable and non-revocable.

## Acknowledgments

- Inspired by ["The New Code" talk by Sean Grove](https://www.youtube.com/watch?v=8rABwKRsec4)
- Built with HTML, CSS, and vanilla JavaScript
- Designed with domain experts in mind

## Deployment

To deploy the Spec Builder app, you can use any static file hosting service (e.g., Netlify, Vercel, GitHub Pages, Cloudflare Pages, or Cloudflare Workers) or your own server. The main entry point is `index.html`.

### Deploying to Cloudflare Workers (Recommended for Custom Domains)

1. **Ensure you have [Wrangler](https://developers.cloudflare.com/workers/wrangler/) installed:**
   ```sh
   npm install -g wrangler
   ```
2. **Check your `wrangler.toml` file:**
   ```toml
   name = "clarifymythoughts"
   compatibility_date = "2025-07-15"

   [assets]
   directory = "."
   ```
3. **Deploy your site:**
   ```sh
   npx wrangler deploy
   ```
4. **Set up DNS in Cloudflare:**
   - For the root domain (`clarifymythoughts.com`):
     - Type: `A`
     - Name: `@`
     - IPv4 address: `192.0.2.1`
     - Proxy status: Proxied (orange cloud)
   - (Optional) For `www` subdomain:
     - Type: `CNAME`
     - Name: `www`
     - Target: `clarifymythoughts.jon-13b.workers.dev`
     - Proxy status: Proxied
5. **Assign your Worker to your domain:**
   - In the Cloudflare dashboard, go to **Workers & Pages > Workers**.
   - Select your Worker (`clarifymythoughts`).
   - Add a route:
     - `clarifymythoughts.com/*`
   - (Optional) Add another route for `www`:
     - `www.clarifymythoughts.com/*`
   - Assign your Worker to these routes.
6. **Wait for DNS propagation and SSL certificate issuance.**
7. **Visit your domain to verify deployment.**

### Deploying to Netlify or Vercel

1. Connect your repository to Netlify or Vercel.
2. Set the build command to `None` (static site).
3. Set the publish directory to the project root (`/`).
4. Deploy!

### Deploying to Cloudflare Pages (Static Hosting)

1. Connect your repository to Cloudflare Pages.
2. Set the build command to `None` (static site).
3. Set the output directory to the project root (`/`).
4. Deploy!

---

For more details on Cloudflare Workers static site deployment, see [Cloudflare’s documentation](https://developers.cloudflare.com/workers/platform/sites/).
