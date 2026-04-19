import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Review } from '../../models/review';
import { StarRatingComponent } from '../ui/star-rating.component';
import { BadgeComponent } from '../ui/badge.component';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [StarRatingComponent, BadgeComponent, DatePipe],
  template: `
    <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">

      <!-- Top row: author + stars -->
      <div class="flex items-center justify-between">
        <span class="text-sm font-semibold text-slate-900">{{ review.authorName }}</span>
        <app-star-rating [rating]="review.rating" />
      </div>

      <!-- Comment -->
      <p class="text-sm text-slate-600 italic leading-relaxed mt-1">"{{ review.comment }}"</p>

      <!-- Bottom row: product, badge, date -->
      <div class="flex items-center gap-2 mt-3 flex-wrap">
        <span class="text-xs text-slate-500">{{ review.product }}</span>
        <app-badge [variant]="review.recommend ? 'success' : 'danger'" />
        <span class="text-xs text-slate-400 ml-auto">{{ review.createdAt | date:'mediumDate' }}</span>
      </div>

    </div>
  `,
})
export class ReviewCardComponent {
  @Input({ required: true }) review!: Review;
}
