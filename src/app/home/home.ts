import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReviewCardComponent } from '../components/review-card/review-card.component';
import { Review } from '../models/review';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ReviewCardComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  sampleReviews: Review[] = [
    {
      id: 1,
      authorName: 'Sophie Andersen',
      comment: 'Absolutely love this tool. It fits perfectly into our workflow and the interface is a pleasure to use every day.',
      product: 'Notion',
      rating: 4.8,
      email: 'sophie.andersen@example.com',
      recommend: true,
      createdAt: new Date('2025-02-03'),
    },
    {
      id: 2,
      authorName: 'James Whitfield',
      comment: 'Solid product overall. A few rough edges in the settings panel but nothing that blocks day-to-day use.',
      product: 'Linear',
      rating: 4.0,
      email: 'james.whitfield@example.com',
      recommend: true,
      createdAt: new Date('2025-03-17'),
    },
    {
      id: 3,
      authorName: 'Priya Nair',
      comment: 'The onboarding experience was frustrating and support took three days to respond. The core features work, but the polish just isn\'t there yet.',
      product: 'Freshdesk',
      rating: 2.5,
      email: 'priya.nair@example.com',
      recommend: false,
      createdAt: new Date('2025-04-01'),
    },
  ];
}
