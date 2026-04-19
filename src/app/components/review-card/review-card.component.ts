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
    <div class="bg-white rounded-[0.55rem] border border-[#daf1e6] p-5">
      <div class="flex flex-row items-center justify-between">
        <p class="text-[#369376] text-[0.55rem] font-[300]">{{ review.authorName }}</p>

        <p class="text-[#26755e] text-[0.75rem] font-[500]">{{ review.product }}</p>
      </div>

      <p class="text-[#0e2a24] text-[0.85rem] font-[300] mt-3">{{ review.comment }}</p>

      <div class="flex flex-row items-center justify-between mt-5">
        <div class="flex flex-row items-center">
          <app-badge [variant]="review.recommend ? 'success' : 'danger'" />

          <p class="text-[#89ccb3] text-[0.55rem] font-[200] ml-1">
            {{ review.createdAt | date: 'mediumDate' }}
          </p>
        </div>

        <div><app-star-rating [rating]="review.rating" /></div>
      </div>
    </div>
  `,
})
export class ReviewCardComponent {
  @Input({ required: true }) review!: Review;
}
