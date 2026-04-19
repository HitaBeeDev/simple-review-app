import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideCircleCheckBig } from '@ng-icons/lucide';
import { Review } from '../models/review';
import { ReviewService } from '../services/review.service';
import { InputComponent } from '../components/ui/input.component';
import { TextareaComponent } from '../components/ui/textarea.component';
import { StarRatingInputComponent } from '../components/ui/star-rating-input.component';
import { ReviewCardComponent } from '../components/review-card/review-card.component';

type Step = 'form' | 'preview' | 'success';

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgIconComponent,
    InputComponent,
    TextareaComponent,
    StarRatingInputComponent,
    ReviewCardComponent,
  ],
  viewProviders: [provideIcons({ lucideCircleCheckBig })],
  templateUrl: './review-form.html',
  styleUrl: './review-form.css',
})
export class ReviewForm {
  private fb = inject(FormBuilder);
  private reviewService = inject(ReviewService);

  step: Step = 'form';
  draftReview?: Review;

  form = this.fb.group({
    authorName: ['', Validators.required],
    comment: ['', [Validators.required, Validators.minLength(10)]],
    rating: [0, [Validators.required, Validators.min(1)]],
    email: ['', [Validators.required, Validators.email]],
    product: ['', Validators.required],
    recommend: [false],
  });

  get f() { return this.form.controls; }

  err(field: keyof typeof this.form.controls): string {
    const c = this.form.get(field);
    if (!c || !c.touched || c.valid) return '';
    if (c.hasError('required')) return 'This field is required.';
    if (c.hasError('minlength')) return `Must be at least ${c.errors?.['minlength'].requiredLength} characters.`;
    if (c.hasError('email')) return 'Enter a valid email address.';
    if (c.hasError('min')) return 'Please select a rating.';
    return 'Invalid value.';
  }

  preview(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    this.draftReview = {
      id: Date.now(),
      authorName: v.authorName!,
      comment: v.comment!,
      rating: v.rating!,
      email: v.email!,
      product: v.product!,
      recommend: v.recommend!,
      createdAt: new Date(),
    };
    this.step = 'preview';
  }

  edit(): void {
    this.step = 'form';
  }

  confirm(): void {
    if (!this.draftReview) return;
    this.reviewService.addReview(this.draftReview);
    this.step = 'success';
  }

  writeAnother(): void {
    this.form.reset({ rating: 0, recommend: false });
    this.draftReview = undefined;
    this.step = 'form';
  }
}
