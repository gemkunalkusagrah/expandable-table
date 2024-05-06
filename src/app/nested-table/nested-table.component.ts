import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-nested-table',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './nested-table.component.html',
  styleUrl: './nested-table.component.css'
})
export class NestedTableComponent {
  @Input() data: any;
  expandedRow: string | null = null;

  get nestedKeys(): string[] {
    return Object.keys(this.data);
  }

  toggleRow(key: string) {
    this.expandedRow = this.expandedRow === key ? null : key;
  }

  isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
  }
}
