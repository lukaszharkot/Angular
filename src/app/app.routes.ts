import { Routes } from '@angular/router';
import { CustomersComponent } from './pages/customers/customers.component';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'customers',
        component: CustomersComponent,
    },
    {
        path: 'add-customer',
        component: AddCustomerComponent,
    },
    { 
        path: '', 
        redirectTo: '/dashboard', 
        pathMatch: 'full' 
    },
    {   path: '**', 
        redirectTo: '/dashboard' 
    }
];
