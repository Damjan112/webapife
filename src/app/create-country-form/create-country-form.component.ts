import { Component } from '@angular/core';
import { Country } from '../Interfaces/country';
import { CountryService } from '../Services/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-country-form',
  templateUrl: './create-country-form.component.html',
  styleUrls: ['./create-country-form.component.css'],
})
export class CreateCountryFormComponent {
  newCountry: Country = { countryId: 0, countryName: '' };

  constructor(private countryService: CountryService, private router: Router) {}

  onCreateCountrySubmit(): void {
    if (
      this.newCountry.countryId === null ||
      this.newCountry.countryName.trim() === ''
    ) {
      alert('Country name is required to create a country.');
      return;
    }

    if (this.newCountry.countryId < 0) {
      alert('Country ID cannot be a negative value.');
      return;
    }
    this.countryService.createCountry(this.newCountry).subscribe(() => {
      this.router.navigate(['/countries']);
    });
  }

  goBack(): void {
    this.router.navigate(['/countries']);
  }
}
