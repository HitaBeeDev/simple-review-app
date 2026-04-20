# Simple Review App

A small Angular app to write and browse product reviews. Built with Angular 20, Tailwind CSS v4, and Signals.

<p align="center">
  <img src="docs/assets/preview.png" alt="Simple Review App screenshot" width="800" />
</p>

## Performance

| Metric | Score |
|---|---|
| Lighthouse Performance | 100 |
| Accessibility | 91 |
| SEO | 100 |

## Features

- Browse reviews in a responsive grid
- Write a review with a three-step flow — fill, preview, confirm
- Ratings with decimal support (e.g. 4.5/5)
- Data persisted in `localStorage`

## Stack

- Angular 20 (standalone components, signals, reactive forms)
- Tailwind CSS v4
- Zod for schema validation

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200`.
