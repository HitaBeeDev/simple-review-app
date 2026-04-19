import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type Variant = 'primary' | 'secondary' | 'outline' | 'danger';
type Size = 'sm' | 'md';

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: 'bg-indigo-500 hover:bg-indigo-600 text-white',
  secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-700',
  outline: 'border border-slate-300 hover:bg-slate-50 text-slate-700',
  danger: 'bg-red-500 hover:bg-red-600 text-white',
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
};

const BASE = 'rounded-lg font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [class]="classes"
      [disabled]="disabled"
      [class.opacity-50]="disabled"
      [class.cursor-not-allowed]="disabled"
    >
      <ng-content />
    </button>
  `,
})
export class ButtonComponent {
  @Input() variant: Variant = 'primary';
  @Input() size: Size = 'md';
  @Input() disabled = false;

  get classes(): string {
    return [BASE, VARIANT_CLASSES[this.variant], SIZE_CLASSES[this.size]].join(' ');
  }
}
