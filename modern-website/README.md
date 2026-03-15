# Modern Website (React + TypeScript)

This repository contains a simple yet modern single–page website built with **React** and **TypeScript**.  It’s designed as a starting point for creating your own landing page and demonstrates how to combine a clean cream‑themed design with micro‑animations and scroll‑triggered effects.

## Features

* **React + TypeScript** – statically‑typed components for better developer experience.
* **Sticky navigation bar** – stays at the top and contains anchor links to different sections.
* **Hero section** – features an abstract background illustration with a call‑to‑action button.
* **Scroll‑triggered animations** – sections fade/slide into view as you scroll using a small custom hook (`useScrollReveal`).
* **Responsive layout** – the grid automatically adapts to different screen sizes.
* **Cream color palette** – uses plenty of white space to emphasize content, following recent design trends that highlight the importance of negative space【7208549185158†L160-L164】.

## Getting Started

1. Install the dependencies (Node ≥ 16 and npm are required):
   ```bash
   cd modern-website
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   This will serve the site at `http://localhost:5173` by default.
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build:
   ```bash
   npm run preview
   ```

## Customize

* **Colour palette:** Update the CSS variables in `src/styles/global.css` to tweak the background and accent colours.
* **Hero image:** Replace `src/assets/hero.png` with your own illustration or photograph.  Try to keep the colours harmonious with the chosen palette.
* **Content:** Modify the JSX in `src/components/*.tsx` to change the text, add sections, or update the navigation links.
* **Animations:** The custom hook `useScrollReveal` uses the Intersection Observer API to add a `.reveal` class when elements enter the viewport.  Adjust the threshold or create additional CSS animations as needed.  Scroll‑triggered animations can enrich storytelling and make content more engaging【769724716880732†L466-L497】.

## Additional Design Considerations

Recent web design trends emphasize micro‑animations and scroll‑triggered interactions【7208549185158†L56-L78】, and a generous use of white space or negative space to help content breathe【7208549185158†L160-L164】.  This template incorporates these ideas with a minimal footprint so you can extend it to suit your needs.
