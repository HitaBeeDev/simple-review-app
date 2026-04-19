import { Component, Input } from '@angular/core';

type BadgeVariant = 'success' | 'danger' | 'neutral';

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  danger: 'bg-red-50 text-red-600 border border-red-200',
  neutral: 'bg-slate-100 text-slate-600',
};

const VARIANT_LABELS: Record<BadgeVariant, string> = {
  success: 'Recommends',
  danger: "Doesn't Recommend",
  neutral: '',
};

@Component({
  selector: 'app-badge',
  standalone: true,
  template: `
    <span [class]="classes">{{ label }}</span>
  `,
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'neutral';
  @Input() customLabel = '';

  get label(): string {
    return this.customLabel || VARIANT_LABELS[this.variant];
  }

  get classes(): string {
    return `inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${VARIANT_CLASSES[this.variant]}`;
  }
}
