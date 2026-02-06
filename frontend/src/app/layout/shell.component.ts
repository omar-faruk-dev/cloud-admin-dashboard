import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <nav aria-label="Primary">
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/metrics">Metrics</a>
      <a routerLink="/audit-logs">Audit Logs</a>
      <a routerLink="/settings">Settings</a>
    </nav>
    <main><router-outlet /></main>
  `
})
export class ShellComponent {}
