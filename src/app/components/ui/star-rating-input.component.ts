import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideStar } from '@ng-icons/lucide';

@Component({
  selector: 'app-star-rating-input',
  standalone: true,
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideStar })],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRatingInputComponent),
      multi: true,
    },
  ],
  template: `
    <div class="flex items-center gap-1">
      @for (star of stars; track $index) {
        <button
          type="button"
          (click)="select($index + 1)"
          (mouseenter)="hovered = $index + 1"
          (mouseleave)="hovered = 0"
          class="hover:scale-110 transition-transform focus:outline-none"
          [disabled]="isDisabled"
        >
          <ng-icon
            name="lucideStar"
            size="20"
            [class]="getStarClass($index + 1)"
          />
        </button>
      }
    </div>
  `,
})
export class StarRatingInputComponent implements ControlValueAccessor {
  stars = [0, 1, 2, 3, 4];
  value = 0;
  hovered = 0;
  isDisabled = false;

  onChange: (v: number) => void = () => {};
  onTouched: () => void = () => {};

  getStarClass(index: number): string {
    const active = this.hovered || this.value;
    return index <= active ? 'text-amber-400' : 'text-slate-300';
  }

  select(index: number): void {
    this.value = index;
    this.onChange(index);
    this.onTouched();
  }

  writeValue(val: number): void {
    this.value = val ?? 0;
  }

  registerOnChange(fn: (v: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.isDisabled = disabled;
  }
}
