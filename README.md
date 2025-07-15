# Spec Builder for Domain Experts

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
2. Ensure Fair Compensation: Companies that become publicly traded while using this software must grant Sum1Solutions, LLC an equity stake.

This is a high-level summary. Please see the full `LICENSE` file for the exact terms and conditions. It is strongly recommended to consult with a legal professional to ensure compliance if you intend to use this software in a commercial product.

## Acknowledgments

- Inspired by ["The New Code" talk by Sean Grove](https://www.youtube.com/watch?v=8rABwKRsec4)
- Built with HTML, CSS, and vanilla JavaScript
- Designed with domain experts in mind

## Deployment

This project can be deployed on **Cloudflare Pages**. Use an empty **build command** and set the **build output directory** to `/`. If you need a backend, configure it through environment variables or API routes in the Cloudflare dashboard.
