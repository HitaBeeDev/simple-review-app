import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideStar } from '@ng-icons/lucide';
import { ReviewService } from '../services/review.service';
import { ReviewCardComponent } from '../components/review-card/review-card.component';

@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [RouterLink, NgIconComponent, ReviewCardComponent],
  viewProviders: [provideIcons({ lucideStar })],
  templateUrl: './review-list.html',
  styleUrl: './review-list.css',
})
export class ReviewList {
  private reviewService = inject(ReviewService);
  reviews = this.reviewService.reviews;
}
