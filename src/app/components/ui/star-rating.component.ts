import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideStar } from '@ng-icons/lucide';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideStar })],
  template: `
    <div class="flex items-center gap-0.5">
      @for (star of stars; track $index) {
        <ng-icon
          name="lucideStar"
          [class]="$index < rating ? 'text-amber-400' : 'text-slate-200'"
          [size]="size === 'lg' ? '20' : '16'"
        />
      }
    </div>
  `,
})
export class StarRatingComponent {
  @Input() rating = 0;
  @Input() size: 'sm' | 'lg' = 'sm';

  stars = [0, 1, 2, 3, 4];
}
