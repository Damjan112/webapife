import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Company } from 'src/app/Interfaces/company';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-company-dialog',
  templateUrl: './company-dialog.component.html',
  styleUrls: ['./company-dialog.component.css'],
})
export class CompanyDialogComponent {
  company: Company;

  constructor(
    private companyService: CompanyService,
    private dialogRef: MatDialogRef<CompanyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Company,
    private router: Router
  ) {
    this.company = { ...data };
  }

  onEditClick(): void {
    this.router.navigate(['/edit/company', this.company.companyId]);
    this.dialogRef.close();
  }

  onDeleteClick(): void {
    this.companyService.deleteCompany(this.company.companyId).subscribe(
      (response) => {
        console.log('Company deleted successfully:', response);
        this.dialogRef.close({ deleted: true });
      },
      (error) => {
        console.error('Error deleting company:', error);
      }
    );
  }
}
