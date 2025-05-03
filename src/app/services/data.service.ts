import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import mockData from './data.mock'

export interface TableData {
  _id: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  address: string;
  tags: string[];
  favoriteFruit: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private mockData: TableData[] = mockData as TableData[];

  getData(): Observable<TableData[]> {
    // Имитация асинхронного запроса с случайной задержкой
    const randomDelay = Math.floor(Math.random() * 1000) + 500;
    return of(this.mockData).pipe(delay(randomDelay));
  }
} 