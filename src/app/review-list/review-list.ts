// review-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Reviews } from '../models/reviews';

@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './review-list.html',
  styleUrl: './review-list.css',
})
export class ReviewList implements OnInit {
  reviews: Reviews[] = [];

  ngOnInit(): void {
    const saved = localStorage.getItem('reviews');
    this.reviews = saved
      ? JSON.parse(saved).map((r: any) => ({ ...r, createdAt: new Date(r.createdAt) }))
      : [];
  }

  trackById(_i: number, r: Reviews) {
    return r.id;
  }
}
