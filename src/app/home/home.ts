import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideStar } from '@ng-icons/lucide';
import { ReviewCardComponent } from '../components/review-card/review-card.component';
import { Review } from '../models/review';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgIconComponent, ReviewCardComponent],
  viewProviders: [provideIcons({ lucideStar })],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  sampleReviews: Review[] = [
    {
      id: 1,
      authorName: 'Alice Johnson',
      comment: 'Amazing app! The UI is clean and intuitive. Highly recommend it to any team.',
      product: 'ReviewPro App',
      rating: 5,
      email: 'alice@example.com',
      recommend: true,
      createdAt: new Date('2024-11-15'),
    },
    {
      id: 2,
      authorName: 'Mark Evans',
      comment: 'Very useful and easy to navigate. Saved our team hours every week.',
      product: 'TaskTracker',
      rating: 4,
      email: 'mark@example.com',
      recommend: true,
      createdAt: new Date('2025-01-08'),
    },
    {
      id: 3,
      authorName: 'Sara Kim',
      comment: 'Good overall but the onboarding could be smoother for new users.',
      product: 'Onboardly',
      rating: 3,
      email: 'sara@example.com',
      recommend: false,
      createdAt: new Date('2025-03-22'),
    },
  ];
}
