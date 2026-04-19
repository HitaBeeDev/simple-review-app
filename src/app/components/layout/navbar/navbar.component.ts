import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideStar, lucideMenu, lucideX } from '@ng-icons/lucide';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgIconComponent],
  viewProviders: [provideIcons({ lucideStar, lucideMenu, lucideX })],
  template: `
    <header class="h-16 sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div class="max-w-3xl mx-auto px-4 flex items-center justify-between h-full">

        <!-- Logo -->
        <a routerLink="/" class="flex items-center gap-1.5">
          <ng-icon name="lucideStar" class="text-amber-400" size="18" />
          <span class="text-base font-semibold text-slate-900">ReviewApp</span>
        </a>

        <!-- Desktop nav -->
        <nav class="hidden sm:flex items-center gap-1">
          <a
            routerLink="/"
            routerLinkActive="text-indigo-600 font-medium bg-indigo-50"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-sm text-slate-500 hover:text-slate-900 transition-colors px-3 py-1.5 rounded-md"
          >Home</a>
          <a
            routerLink="/new"
            routerLinkActive="text-indigo-600 font-medium bg-indigo-50"
            class="text-sm text-slate-500 hover:text-slate-900 transition-colors px-3 py-1.5 rounded-md"
          >Write a Review</a>
          <a
            routerLink="/list"
            routerLinkActive="text-indigo-600 font-medium bg-indigo-50"
            class="text-sm text-slate-500 hover:text-slate-900 transition-colors px-3 py-1.5 rounded-md"
          >All Reviews</a>
        </nav>

        <!-- Mobile hamburger -->
        <button
          class="sm:hidden p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          (click)="menuOpen.set(!menuOpen())"
          aria-label="Toggle menu"
        >
          @if (menuOpen()) {
            <ng-icon name="lucideX" size="20" />
          } @else {
            <ng-icon name="lucideMenu" size="20" />
          }
        </button>
      </div>

      <!-- Mobile dropdown -->
      @if (menuOpen()) {
        <div class="sm:hidden w-full bg-white border-b border-slate-200 shadow-sm">
          <nav class="max-w-3xl mx-auto px-4 py-2 flex flex-col gap-1">
            <a
              routerLink="/"
              routerLinkActive="text-indigo-600 font-medium bg-indigo-50"
              [routerLinkActiveOptions]="{ exact: true }"
              class="text-sm text-slate-500 hover:text-slate-900 transition-colors px-3 py-2 rounded-md"
              (click)="menuOpen.set(false)"
            >Home</a>
            <a
              routerLink="/new"
              routerLinkActive="text-indigo-600 font-medium bg-indigo-50"
              class="text-sm text-slate-500 hover:text-slate-900 transition-colors px-3 py-2 rounded-md"
              (click)="menuOpen.set(false)"
            >Write a Review</a>
            <a
              routerLink="/list"
              routerLinkActive="text-indigo-600 font-medium bg-indigo-50"
              class="text-sm text-slate-500 hover:text-slate-900 transition-colors px-3 py-2 rounded-md"
              (click)="menuOpen.set(false)"
            >All Reviews</a>
          </nav>
        </div>
      }
    </header>
  `,
})
export class NavbarComponent {
  menuOpen = signal(false);
}
