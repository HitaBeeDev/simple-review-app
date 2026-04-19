import { Injectable, signal } from '@angular/core';
import { Review } from '../models/review';

const STORAGE_KEY = 'reviews';

const SEED_REVIEWS: Review[] = [
  { id: 1, authorName: 'Sophie Andersen', product: 'Notion', rating: 4.8, recommend: true, email: 'sophie@example.com', comment: 'Absolutely transformed how our team organizes work. The flexibility is unmatched and the interface feels effortless.', createdAt: new Date('2025-01-10') },
  { id: 2, authorName: 'James Whitfield', product: 'Linear', rating: 4.5, recommend: true, email: 'james@example.com', comment: 'Best issue tracker I\'ve used. Fast, keyboard-friendly, and the design is refreshingly clean compared to Jira.', createdAt: new Date('2025-01-22') },
  { id: 3, authorName: 'Priya Nair', product: 'Freshdesk', rating: 2.5, recommend: false, email: 'priya@example.com', comment: 'The onboarding was frustrating and support took days to respond. Core features work but the polish just isn\'t there yet.', createdAt: new Date('2025-02-05') },
  { id: 4, authorName: 'Lucas Ferreira', product: 'Figma', rating: 5.0, recommend: true, email: 'lucas@example.com', comment: 'The industry standard for good reason. Real-time collaboration alone makes it worth every penny for design teams.', createdAt: new Date('2025-02-14') },
  { id: 5, authorName: 'Mia Johansson', product: 'Slack', rating: 3.5, recommend: true, email: 'mia@example.com', comment: 'Great for async communication but can get overwhelming fast. Solid product once you get your channels organized.', createdAt: new Date('2025-02-28') },
  { id: 6, authorName: 'Daniel Park', product: 'Vercel', rating: 4.8, recommend: true, email: 'daniel@example.com', comment: 'Deploying a Next.js app has never been this smooth. Preview deployments on every PR are a game changer for our workflow.', createdAt: new Date('2025-03-08') },
  { id: 7, authorName: 'Amara Osei', product: 'Webflow', rating: 4.0, recommend: true, email: 'amara@example.com', comment: 'Powerful once you get past the learning curve. Built our entire marketing site without touching a line of code.', createdAt: new Date('2025-03-15') },
  { id: 8, authorName: 'Tom Becker', product: 'Loom', rating: 3.0, recommend: false, email: 'tom@example.com', comment: 'Good concept but the free tier is too limited and video quality degrades noticeably on slower connections.', createdAt: new Date('2025-03-27') },
  { id: 9, authorName: 'Yuki Tanaka', product: 'GitHub Copilot', rating: 4.5, recommend: true, email: 'yuki@example.com', comment: 'Genuinely speeds up boilerplate work. It\'s not a replacement for thinking but it handles the repetitive parts beautifully.', createdAt: new Date('2025-04-02') },
  { id: 10, authorName: 'Elena Rossi', product: 'Framer', rating: 4.2, recommend: true, email: 'elena@example.com', comment: 'Stunning animations with very little effort. Our landing page conversions improved after the redesign in Framer.', createdAt: new Date('2025-04-10') },
];

@Injectable({ providedIn: 'root' })
export class ReviewService {
  reviews = signal<Review[]>(this.load());

  addReview(review: Review): void {
    const updated = [...this.reviews(), review];
    this.reviews.set(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(
      updated.map(r => ({ ...r, createdAt: r.createdAt.toISOString() }))
    ));
  }

  private load(): Review[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(
          SEED_REVIEWS.map(r => ({ ...r, createdAt: r.createdAt.toISOString() }))
        ));
        return SEED_REVIEWS;
      }
      return (JSON.parse(raw) as any[]).map(r => ({
        ...r,
        createdAt: new Date(r.createdAt),
      }));
    } catch {
      return SEED_REVIEWS;
    }
  }
}
