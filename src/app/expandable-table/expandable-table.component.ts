import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedTableComponent } from '../nested-table/nested-table.component';
@Component({
  selector: 'app-expandable-table',
  standalone: true,
  imports: [CommonModule, NestedTableComponent],
  templateUrl: './expandable-table.component.html',
  styleUrl: './expandable-table.component.css',
})
export class ExpandableTableComponent {
  data = {
    leve0: {
      leve1: {
        level2: {
          row2: {
            data1: {
              subData1: 'abc',
              subData2: 'abc',
              subData3: 'abc',
            },
            data2: {
              subData1: 'abc',
            },
          },
        },
        subData2: 'abc',
        subData3: 'abc',
      },
      data2: {
        subData1: 'abc',
        subData2: 'abc',
        subData3: 'abc',
      },
    },
    row2: {
      data1: {
        subData1: 'abc',
        subData2: 'abc',
        subData3: 'abc',
      },
      data2: {
        subData1: 'abc',
      },
    },
  };
  dataKeys = Object.keys(this.data);
  expandedRows: { [key: string]: boolean } = {};
  expandedSubRows: { [key: string]: { [subKey: string]: boolean } } = {};

  expandRow(rowKey: string) {
    this.expandedRows[rowKey] = !this.expandedRows[rowKey];
  }

  toggleSubRow(rowKey: string, subKey: string) {
    if (!this.expandedSubRows[rowKey]) {
      this.expandedSubRows[rowKey] = {};
    }
    this.expandedSubRows[rowKey][subKey] =
      !this.expandedSubRows[rowKey][subKey];
  }

  getObjectKeys(obj: object): string[] {
    return Object.keys(obj);
  }

  toggleRow(rowKey: string) {
    this.expandedRows[rowKey] = !this.expandedRows[rowKey];
  }
}
