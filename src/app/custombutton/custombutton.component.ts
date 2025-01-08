import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

@Component({
  selector: 'app-custombutton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custombutton.component.html',
  styleUrl: './custombutton.component.css',
})
export class CustombuttonComponent {
  @Input() variant?: 'contained' | 'outlined' | 'text';
  @Input() color?: 'primary' | 'secondary' | 'success' | 'error';
  @Input() size?: 'small' | 'medium' | 'large';
  @Input() class?: string;

  private buttonVariants = cva(
    'font-semibold rounded transition-colors flex items-center gap-2 text-black',
    {
      variants: {
        variant: {
          contained: '',
          outlined: 'border-2 bg-transparent',
          text: 'bg-transparent',
        },
        color: {
          primary: 'bg-blue-500 hover:bg-blue-700',
          secondary: 'bg-gray-500 hover:bg-gray-700',
          success: 'bg-green-500 hover:bg-green-700',
          error: 'bg-red-500 hover:bg-red-700',
        },
        size: {
          small: 'py-1 px-[10px]',
          medium: 'py-[6px] px-4',
          large: 'py-2 px-[22px]',
        },
      },
      defaultVariants: {
        variant: 'contained',
        color: 'primary',
        size: 'medium',
      },
      compoundVariants: [
        {
          variant: 'contained',
          color: ['secondary', 'success', 'error', 'primary'],
          class: 'text-white',
        },
        {
          variant: 'text',
          color: 'primary',
          class: 'bg-transparent text-blue-300 hover:bg-blue-200/20',
        },
        {
          variant: 'text',
          color: 'secondary',
          class: 'bg-transparent text-gray-300 hover:bg-gray-200/20',
        },
        {
          variant: 'text',
          color: 'success',
          class: 'bg-transparent text-green-300 hover:bg-green-200/20',
        },
        {
          variant: 'text',
          color: 'error',
          class: 'bg-transparent text-red-300 hover:bg-red-200/20',
        },
        {
          variant: 'outlined',
          color: 'primary',
          class:
            'border-blue-200 hover:border-blue-500 text-blue-200 hover:text-blue-500 bg-transparent hover:bg-transparent',
        },
        {
          variant: 'outlined',
          color: 'secondary',
          class:
            'border-gray-200 hover:border-gray-500 text-gray-200 hover:text-gray-500 bg-transparent hover:bg-transparent',
        },
      ],
    }
  );

  getButtonClasses(): string {
    return cn(
      this.buttonVariants({
        variant: this.variant,
        color: this.color,
        size: this.size,
      }),
      this.class
    );
  }
}
