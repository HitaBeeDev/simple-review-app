import { Routes } from '@angular/router';
import { ReviewList } from './review-list/review-list';
import { ReviewForm } from './review-form/review-form';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'list', component: ReviewList },
  { path: 'new', component: ReviewForm },
];
