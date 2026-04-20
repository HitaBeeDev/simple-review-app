import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-rating-input',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRatingInputComponent),
      multi: true,
    },
  ],
  template: `
    <div class="flex items-center gap-3" role="group" aria-label="Rating">
      <button
        type="button"
        aria-label="Decrease rating"
        (click)="decrement()"
        [disabled]="isDisabled || value <= 0"
        class="w-8 h-8 rounded-full border border-[#daf1e6] bg-white text-[#1a4b3e] text-lg flex items-center justify-center hover:bg-[#daf1e6] disabled:opacity-30 disabled:cursor-not-allowed transition-colors select-none"
      >−</button>

      <div class="flex flex-col items-center min-w-[4rem]" aria-live="polite" aria-atomic="true">
        <span class="text-[1.6rem] font-[500] text-[#d97a2b] leading-none" [attr.aria-label]="display + ' out of 5'">{{ display }}</span>
        <span class="text-[0.6rem] font-[300] text-[#89ccb3] mt-0.5" aria-hidden="true">out of 5</span>
      </div>

      <button
        type="button"
        aria-label="Increase rating"
        (click)="increment()"
        [disabled]="isDisabled || value >= 5"
        class="w-8 h-8 rounded-full border border-[#daf1e6] bg-white text-[#1a4b3e] text-lg flex items-center justify-center hover:bg-[#daf1e6] disabled:opacity-30 disabled:cursor-not-allowed transition-colors select-none"
      >+</button>
    </div>
  `,
})
export class StarRatingInputComponent implements ControlValueAccessor {
  value = 0;
  isDisabled = false;

  onChange: (v: number) => void = () => {};
  onTouched: () => void = () => {};

  get display(): string {
    return this.value % 1 === 0 ? `${this.value}.0` : `${this.value}`;
  }

  increment(): void {
    if (this.value >= 5) return;
    this.value = Math.round((this.value + 0.5) * 10) / 10;
    this.onChange(this.value);
    this.onTouched();
  }

  decrement(): void {
    if (this.value <= 0) return;
    this.value = Math.round((this.value - 0.5) * 10) / 10;
    this.onChange(this.value);
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
