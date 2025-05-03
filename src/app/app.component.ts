import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './components/data-table/data-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  template: `
    <div class="app-container">
      <h1>Управление данными</h1>
      <app-data-table></app-data-table>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    h1 {
      color: #333;
      margin-bottom: 20px;
    }
  `]
})
export class AppComponent {
  title = 'data-table';
}
