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
    <div class="h-full rounded-[0.55rem] border border-[#daf1e6] bg-white p-4 sm:p-5">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p class="min-w-0 break-words text-[0.65rem] font-[300] text-[#369376] sm:text-[0.7rem]">{{ review.authorName }}</p>

        <p class="min-w-0 break-words text-[0.85rem] font-[500] text-[#26755e] sm:text-[0.9rem]">{{ review.product }}</p>
      </div>

      <p class="mt-3 break-words text-[0.85rem] font-[300] leading-6 text-[#0e2a24]">{{ review.comment }}</p>

      <div class="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex flex-wrap items-center gap-x-1 gap-y-2">
          <app-badge [variant]="review.recommend ? 'success' : 'danger'" />

          <p class="text-[0.65rem] font-[200] text-[#89ccb3] sm:text-[0.7rem]">
            {{ review.createdAt | date: 'mediumDate' }}
          </p>
        </div>

        <div class="self-start sm:self-auto"><app-star-rating [rating]="review.rating" /></div>
      </div>
    </div>
  `,
})
export class ReviewCardComponent {
  @Input({ required: true }) review!: Review;
}
