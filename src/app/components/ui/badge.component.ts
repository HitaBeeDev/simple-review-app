import { Component, Input } from '@angular/core';

type BadgeVariant = 'success' | 'danger' | 'neutral';

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  success: 'text-emerald-700',
  danger: 'bg-[#fce9e7] border-[#fce9e7] text-[#91202e]',
  neutral: 'text-slate-600',
};

const VARIANT_LABELS: Record<BadgeVariant, string> = {
  success: 'Recommended',
  danger: "Doesn't Recommend",
  neutral: '',
};

@Component({
  selector: 'app-badge',
  standalone: true,
  host: { class: 'inline-flex items-center' },
  template: ` <span [class]="classes">{{ label }}</span> `,
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'neutral';
  @Input() customLabel = '';

  get label(): string {
    return this.customLabel || VARIANT_LABELS[this.variant];
  }

  get classes(): string {
    return `text-[0.6rem] font-[400] pb-1 pt-1 pl-2 pr-2 rounded-[0.3rem] bg-[#daf1e6] border border-[#daf1e6] ${VARIANT_CLASSES[this.variant]}`;
  }
}
