import { Component } from '@angular/core';
import { Company } from '../Interfaces/company';
import { Router } from '@angular/router';
import { CompanyService } from '../Services/company.service';

@Component({
  selector: 'app-create-company-form',
  templateUrl: './create-company-form.component.html',
  styleUrls: ['./create-company-form.component.css'],
})
export class CreateCompanyFormComponent {
  newCompany: Company = { companyId: 0, companyName: '' };

  constructor(private companyService: CompanyService, private router: Router) {}

  onCreateCompanySubmit(): void {
    if (
      this.newCompany.companyId === null ||
      this.newCompany.companyName.trim() === ''
    ) {
      alert('Company name is required to create a company.');
      return;
    }

    if (this.newCompany.companyId < 0) {
      alert('Company ID cannot be a negative value.');
      return;
    }
    this.companyService.createCompany(this.newCompany).subscribe(() => {
      this.router.navigate(['/companies']);
    });
  }

  goBack(): void {
    this.router.navigate(['/companies']);
  }
}
