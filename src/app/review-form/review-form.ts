import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Reviews } from '../models/reviews';

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './review-form.html',
  styleUrl: './review-form.css',
})
export class ReviewForm implements OnInit {
  newAuthorName = '';
  newComment = '';
  newRating = 0;
  newEmail = '';
  newProduct = '';
  newRecommend = false;

  reviews: Reviews[] = [];

  draftReview?: Reviews;
  isPreview = false;
  isSavedMessageVisible = false;
  lastSubmittedReview?: Reviews;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const saved = localStorage.getItem('reviews');
    this.reviews = saved ? JSON.parse(saved) : [];
  }

  submitReview() {
    if (
      this.newAuthorName.trim() &&
      this.newComment.trim() &&
      this.newRating > 0 &&
      this.newEmail.trim() &&
      this.newProduct.trim()
    ) {
      this.draftReview = {
        id: Date.now(),
        authorName: this.newAuthorName,
        comment: this.newComment,
        rating: this.newRating,
        email: this.newEmail,
        product: this.newProduct,
        recommend: this.newRecommend,
        createdAt: new Date(),
      };
      this.isPreview = true;
      this.isSavedMessageVisible = false;
    }
  }

  deleteDraft() {
    this.isPreview = false;
    this.draftReview = undefined;
  }

  confirmDraft() {
    if (!this.draftReview) return;

    this.reviews.push(this.draftReview);
    this.lastSubmittedReview = this.draftReview;

    localStorage.setItem('reviews', JSON.stringify(this.reviews));

    this.isPreview = false;
    this.draftReview = undefined;

    this.isSavedMessageVisible = true;
  }

  goHomeNow() {
    this.isSavedMessageVisible = false;
    this.lastSubmittedReview = undefined;
    this.router.navigate(['/']);
  }
}
