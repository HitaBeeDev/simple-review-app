import { Injectable, signal } from '@angular/core';
import { Review } from '../models/review';

const STORAGE_KEY = 'reviews';

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
      if (!raw) return [];
      return (JSON.parse(raw) as any[]).map(r => ({
        ...r,
        createdAt: new Date(r.createdAt),
      }));
    } catch {
      return [];
    }
  }
}
