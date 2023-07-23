import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/Interfaces/company';
import { CompanyService } from 'src/app/Services/company.service';
import { MatDialog } from '@angular/material/dialog';
import { CompanyDialogComponent } from 'src/app/company-dialog/company-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  deletedStatus: boolean = false;

  constructor(
    private companyService: CompanyService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchCompanies();
  }

  fetchCompanies(): void {
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    });
  }
  onCompanyCardClick(companyId: number): void {
    this.companyService.getCompanyById(companyId).subscribe((company) => {
      this.openCompanyDialog(company);
    });
  }

  openCompanyDialog(company: Company): void {
    const dialogRef = this.dialog.open(CompanyDialogComponent, {
      width: '400px',
      data: company,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.deleted === true) {
        this.deletedStatus = true;
        this.fetchCompanies();
        setTimeout(() => {
          this.deletedStatus = false;
        }, 3000);
      }
    });
  }
  onCreateCompanyClick(): void {
    this.router.navigate(['/create-company']);
  }
}
