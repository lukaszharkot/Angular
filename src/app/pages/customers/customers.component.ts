import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { CustomerService, Customer } from '../../components/customer-service/customer.service';
//import { HttpClientModule } from '@angular/common/http';


//temporary
export interface Customer {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
}


@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'] 
})
export class CustomersComponent {
  customers: Customer[] = [];
  filteredCustomers: Customer[] = []; 
  searchSurname: string = '';

  constructor() {
    this.initializeCustomers(); 
  }

  private initializeCustomers(): void {
    this.customers = [
      { id: 1, name: 'John', surname: 'Doe', email: 'john.doe@example.com', phone: '123-456-789' },
      { id: 2, name: 'Jane', surname: 'Doe', email: 'jane.doe@example.com', phone: '987-654-321' },
      { id: 3, name: 'Bob', surname: 'Smith', email: 'bob.smith@example.com', phone: '555-123-456' },
      { id: 4, name: 'Alice', surname: 'Johnson', email: 'alice.johnson@example.com', phone: '444-555-666' },
      { id: 5, name: 'Charlie', surname: 'Brown', email: 'charlie.brown@example.com', phone: '333-222-111' },
      { id: 6, name: 'David', surname: 'Wilson', email: 'david.wilson@example.com', phone: '222-333-444' },
      { id: 7, name: 'Eva', surname: 'Taylor', email: 'eva.taylor@example.com', phone: '111-222-333' },
      { id: 8, name: 'Frank', surname: 'Harris', email: 'frank.harris@example.com', phone: '555-888-999' },
      { id: 9, name: 'Grace', surname: 'Martinez', email: 'grace.martinez@example.com', phone: '777-888-000' },
      { id: 10, name: 'Henry', surname: 'Garcia', email: 'henry.garcia@example.com', phone: '999-888-777' },
      { id: 11, name: 'John', surname: 'Doe', email: 'john.doe@example.com', phone: '123-456-789' },
      { id: 12, name: 'Jane', surname: 'Doe', email: 'jane.doe@example.com', phone: '987-654-321' },
      { id: 13, name: 'Bob', surname: 'Smith', email: 'bob.smith@example.com', phone: '555-123-456' },
      { id: 14, name: 'Alice', surname: 'Johnson', email: 'alice.johnson@example.com', phone: '444-555-666' },
      { id: 15, name: 'Charlie', surname: 'Brown', email: 'charlie.brown@example.com', phone: '333-222-111' },
      { id: 16, name: 'David', surname: 'Wilson', email: 'david.wilson@example.com', phone: '222-333-444' },
      { id: 17, name: 'Eva', surname: 'Taylor', email: 'eva.taylor@example.com', phone: '111-222-333' },
      { id: 18, name: 'Frank', surname: 'Harris', email: 'frank.harris@example.com', phone: '555-888-999' },
      { id: 19, name: 'Grace', surname: 'Martinez', email: 'grace.martinez@example.com', phone: '777-888-000' },
      { id: 20, name: 'Henry', surname: 'Garcia', email: 'henry.garcia@example.com', phone: '999-888-777' },
      { id: 21, name: 'Eva', surname: 'Taylor', email: 'eva.taylor@example.com', phone: '111-222-333' },
      { id: 22, name: 'Frank', surname: 'Harris', email: 'frank.harris@example.com', phone: '555-888-999' },
      { id: 23, name: 'Grace', surname: 'Martinez', email: 'grace.martinez@example.com', phone: '777-888-000' },
      { id: 24, name: 'Henry', surname: 'Garcia', email: 'henry.garcia@example.com', phone: '999-888-777' },
      { id: 25, name: 'John', surname: 'Doe', email: 'john.doe@example.com', phone: '123-456-789' },
      { id: 26, name: 'Jane', surname: 'Doe', email: 'jane.doe@example.com', phone: '987-654-321' },
      { id: 27, name: 'Bob', surname: 'Smith', email: 'bob.smith@example.com', phone: '555-123-456' },
      { id: 28, name: 'Alice', surname: 'Johnson', email: 'alice.johnson@example.com', phone: '444-555-666' },
      { id: 29, name: 'Charlie', surname: 'Brown', email: 'charlie.brown@example.com', phone: '333-222-111' },
      { id: 30, name: 'David', surname: 'Wilson', email: 'david.wilson@example.com', phone: '222-333-444' },
      { id: 31, name: 'Eva', surname: 'Taylor', email: 'eva.taylor@example.com', phone: '111-222-333' },
      { id: 32, name: 'Frank', surname: 'Harris', email: 'frank.harris@example.com', phone: '555-888-999' },
      { id: 33, name: 'Grace', surname: 'Martinez', email: 'grace.martinez@example.com', phone: '777-888-000' },
      { id: 34, name: 'Henry', surname: 'Johnny', email: 'henry.garcia@example.com', phone: '999-888-777' }
    ];
    this.filteredCustomers = this.customers;
  }

  filterCustomers(): void {
    this.filteredCustomers = this.customers.filter(customer => 
      customer.surname.toLowerCase().includes(this.searchSurname.toLowerCase())
    );
  }

}
