import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactListComponent } from './Contact/contact-list/contact-list.component';
import { NavbarComponent } from './NavBar/navbar/navbar.component';
import { CompanyListComponent } from './Company/company-list/company-list.component';
import { CountryListComponent } from './Country/country-list/country-list.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CompanyDialogComponent } from './company-dialog/company-dialog.component';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { CountryDialogComponent } from './country-dialog/country-dialog.component';
import { CreateCompanyFormComponent } from './create-company-form/create-company-form.component';
import { FormsModule } from '@angular/forms';
import { CreateContactFormComponent } from './create-contact-form/create-contact-form.component';
import { CreateCountryFormComponent } from './create-country-form/create-country-form.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { EditCountryComponent } from './edit-country/edit-country.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    CompanyListComponent,
    NavbarComponent,
    CountryListComponent,
    HomeComponent,
    FooterComponent,
    CompanyDialogComponent,
    ContactDialogComponent,
    CountryDialogComponent,
    CreateCompanyFormComponent,
    CreateContactFormComponent,
    CreateCountryFormComponent,
    EditCompanyComponent,
    EditContactComponent,
    EditCountryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatDialogModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
