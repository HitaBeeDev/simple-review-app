import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { z } from 'zod';

export interface Review {
  id: number;
  authorName: string;
  comment: string;
  rating: number;
  email: string;
  product: string;
  recommend: boolean;
  createdAt: Date;
}

export const reviewSchema = z.object({
  authorName: z.string().min(1, 'Name is required'),
  comment: z.string().min(10, 'Comment must be at least 10 characters'),
  rating: z.number().min(1).max(5),
  email: z.string().email('Invalid email'),
  product: z.string().min(1, 'Product is required'),
  recommend: z.boolean(),
});

export type ReviewFormValues = z.infer<typeof reviewSchema>;

export function zodValidator(schema: z.ZodTypeAny): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const result = schema.safeParse(control.value);
    if (result.success) return null;
    return { zod: result.error.flatten() };
  };
}
