import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataService, TableData } from '../../services/data.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})


export class DataTableComponent implements OnInit {
  displayedColumns: string[] = [
    'isActive',
    'name',
    'age',
    'company',
    'email',
    'balance',
    'favoriteFruit',
    'actions'
  ];
  
  dataSource!: MatTableDataSource<TableData>;
  searchControl = new FormControl('');
  isLoading = true;
  visibleColumns = new FormControl(this.displayedColumns);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
    this.setupSearch();
  }

  private loadData(): void {
    this.isLoading = true;
    this.dataService.getData().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoading = false;
    });
  }

  private setupSearch(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(value => {
        if (this.dataSource) {
          this.dataSource.filter = value?.trim().toLowerCase() || '';
        }
      });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggleColumn(column: string): void {
    const currentColumns = this.visibleColumns.value || [];
    if (currentColumns.includes(column)) {
      this.visibleColumns.setValue(currentColumns.filter(col => col !== column));
    } else {
      this.visibleColumns.setValue([...currentColumns, column]);
    }
  }

  getColumnDisplayName(key: string): string {
    const titles: Record<string, string> = {
        "isActive": 'Активен',
        "name": 'Имя',
        "age": 'Возраст',
        "company": 'Компания',
        "email": 'Email',
        "balance": 'Баланс',
        "favoriteFruit": 'Любимый фрукт',
        "actions": 'Действия',
      }

      return titles[key];
  }
} 