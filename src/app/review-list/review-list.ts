import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReviewService } from '../services/review.service';
import { ReviewCardComponent } from '../components/review-card/review-card.component';

@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [RouterLink, ReviewCardComponent],
  templateUrl: './review-list.html',
  styleUrl: './review-list.css',
})
export class ReviewList {
  private reviewService = inject(ReviewService);
  reviews = this.reviewService.reviews;
}
