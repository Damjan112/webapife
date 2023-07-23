import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './Company/company-list/company-list.component';
import { ContactListComponent } from './Contact/contact-list/contact-list.component';
import { CountryListComponent } from './Country/country-list/country-list.component';
import { HomeComponent } from './home/home.component';
import { CreateCompanyFormComponent } from './create-company-form/create-company-form.component';
import { CreateContactFormComponent } from './create-contact-form/create-contact-form.component';
import { CreateCountryFormComponent } from './create-country-form/create-country-form.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { EditCountryComponent } from './edit-country/edit-country.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'companies', component: CompanyListComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: 'countries', component: CountryListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'create-company', component: CreateCompanyFormComponent },
  { path: 'create-contact', component: CreateContactFormComponent },
  { path: 'create-country', component: CreateCountryFormComponent },
  { path: 'edit/company/:id', component: EditCompanyComponent },
  { path: 'edit/contact/:id', component: EditContactComponent },
  { path: 'edit/country/:id', component: EditCountryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
