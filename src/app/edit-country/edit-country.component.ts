import { Component } from '@angular/core';
import { Country } from '../Interfaces/country';
import { CountryService } from '../Services/country.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css']
})
export class EditCountryComponent {
  country: Country = {
    countryId: 0,
    countryName: '',
  };

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the country ID from the route parameter
    const countryId = Number(this.route.snapshot.paramMap.get('id'));

    // Fetch the selected country's data from the service
    this.countryService.getCountryById(countryId).subscribe((data) => {
      this.country = data;
    });
  }

  onUpdateCountrySubmit(): void {
    // Call the country service to update the country data
    this.countryService.editCountry(this.country.countryId,this.country).subscribe(
      (response) => {
        console.log('Company updated successfully:', response);
        this.router.navigate(['/countries']); // Navigate back to the country list after updating
      },
      (error) => {
        console.error('Error updating country:', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/countries']);
  }
}
