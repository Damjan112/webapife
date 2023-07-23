import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Country } from 'src/app/Interfaces/country';
import { CountryService } from 'src/app/Services/country.service';
import { CountryDialogComponent } from 'src/app/country-dialog/country-dialog.component';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit {
  countries: Country[] = [];
  deletedStatus: boolean = false;

  constructor(
    private countryService: CountryService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchCountries();
  }

  fetchCountries(): void {
    this.countryService.getCountries().subscribe((countries) => {
      this.countries = countries;
    });
  }
  onCountryCardClick(countryId: number): void {
    this.countryService.getCountryById(countryId).subscribe((country) => {
      this.openCountryDialog(country);
    });
  }

  openCountryDialog(country: Country): void {
    const dialogRef = this.dialog.open(CountryDialogComponent, {
      data: country,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.deleted === true) {
        this.deletedStatus = true;
        this.fetchCountries();
        setTimeout(() => {
          this.deletedStatus = false;
        }, 3000);
      }
    });
  }
  onCreateCountryClick(): void {
    this.router.navigate(['/create-country']);
  }
}
