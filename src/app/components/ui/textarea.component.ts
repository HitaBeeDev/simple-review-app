import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let nextId = 0;

@Component({
  selector: 'app-textarea',
  standalone: true,
  host: { class: 'block' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
  template: `
    @if (label) {
      <label [for]="uid" class="block text-[0.75rem] font-[400] text-[#163e34] mb-1">{{ label }}</label>
    }
    <textarea
      [id]="uid"
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
  readonly uid = `textarea-${++nextId}`;
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
      'w-full rounded-[0.3rem] border bg-white px-3 py-2 text-[0.8rem] text-[#163e34] placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:border-transparent transition resize-none';
    return this.errorMessage
      ? `${base} border-red-400 focus:ring-red-400`
      : `${base} border-[#daf1e6] focus:ring-[#1a4b3e]`;
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
