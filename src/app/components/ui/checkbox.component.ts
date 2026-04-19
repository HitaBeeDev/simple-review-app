import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
  template: `
    <label class="flex items-center gap-2 cursor-pointer select-none">
      <input
        type="checkbox"
        class="sr-only"
        [checked]="value"
        [disabled]="isDisabled"
        (change)="onCheck($any($event.target).checked)"
        (blur)="onTouched()"
      />
      <span
        class="flex items-center justify-center w-4 h-4 rounded border transition-colors duration-150 shrink-0"
        [class]="value ? 'bg-indigo-500 border-indigo-500' : 'bg-white border-slate-300'"
      >
        @if (value) {
          <svg class="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="2,6 5,9 10,3" />
          </svg>
        }
      </span>
      @if (label) {
        <span class="text-sm text-slate-700">{{ label }}</span>
      }
    </label>
  `,
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() label = '';

  value = false;
  isDisabled = false;

  onChange: (v: boolean) => void = () => {};
  onTouched: () => void = () => {};

  onCheck(checked: boolean): void {
    this.value = checked;
    this.onChange(checked);
  }

  writeValue(val: boolean): void {
    this.value = !!val;
  }

  registerOnChange(fn: (v: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.isDisabled = disabled;
  }
}
