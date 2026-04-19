import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  template: `
    <span class="text-[0.75rem] font-[500] text-[#d97a2b]">{{ rating }}<span class="text-slate-300 font-[400]">/5</span></span>
  `,
})
export class StarRatingComponent {
  @Input() rating = 0;
  @Input() size: 'sm' | 'lg' = 'sm';
}
