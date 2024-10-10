import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Customer {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root' 
})
export class CustomerService {
  private apiUrl = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) {}

  // Method to get customers
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl); 
  }
}
