import { Component } from '@angular/core';
import { ReviewForm } from '../review-form/review-form';
import { ReviewList } from '../review-list/review-list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ReviewForm, ReviewList, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
