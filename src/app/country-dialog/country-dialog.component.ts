import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Country } from '../Interfaces/country';
import { CountryService } from '../Services/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-dialog',
  templateUrl: './country-dialog.component.html',
  styleUrls: ['./country-dialog.component.css'],
})
export class CountryDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public country: Country,
    private countryService: CountryService,
    private dialogRef: MatDialogRef<CountryDialogComponent>,
    private router: Router
  ) {}

  onEditClick(): void {
    this.router.navigate(['/edit/country', this.country.countryId]);
    this.dialogRef.close();
  }

  onDeleteClick(): void {
    this.countryService.deleteCountry(this.country.countryId).subscribe(
      (response) => {
        console.log('Country deleted successfully:', response);
        this.dialogRef.close({ deleted: true });
      },
      (error) => {
        console.error('Error deleting country:', error);
      }
    );
  }
}
