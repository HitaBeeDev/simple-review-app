import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type Card = {
  id: number;
  name: string;
  review: string;
  product: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  cards: Card[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      review: 'Amazing app! The UI is clean and intuitive.',
      product: 'ReviewPro App',
    },
    {
      id: 2,
      name: 'Mark Evans',
      review: 'Very useful and easy to navigate.',
      product: 'TaskTracker',
    },
    {
      id: 3,
      name: 'Mark Evans',
      review: 'Very useful and easy to navigate.',
      product: 'TaskTracker',
    },
  ];

  selectedIndex: number | null = null;
}
