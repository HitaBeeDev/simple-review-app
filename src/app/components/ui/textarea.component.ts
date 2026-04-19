import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
  template: `
    @if (label) {
      <label class="block text-sm font-medium text-slate-700 mb-1">{{ label }}</label>
    }
    <textarea
      [placeholder]="placeholder"
      [rows]="rows"
      [disabled]="isDisabled"
      (input)="onChange($any($event.target).value)"
      (blur)="onTouched()"
      [class]="textareaClasses"
    >{{ value }}</textarea>
    @if (errorMessage) {
      <p class="text-xs text-red-500 mt-1">{{ errorMessage }}</p>
    }
  `,
})
export class TextareaComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() errorMessage = '';
  @Input() placeholder = '';
  @Input() rows = 3;

  value = '';
  isDisabled = false;

  onChange: (v: string) => void = () => {};
  onTouched: () => void = () => {};

  get textareaClasses(): string {
    const base =
      'w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition resize-none';
    return this.errorMessage
      ? `${base} border-red-400 focus:ring-red-400`
      : `${base} border-slate-300 focus:ring-indigo-500`;
  }

  writeValue(val: string): void {
    this.value = val ?? '';
  }

  registerOnChange(fn: (v: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.isDisabled = disabled;
  }
}
