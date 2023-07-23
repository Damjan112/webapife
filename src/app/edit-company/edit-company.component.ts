import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../Interfaces/company';
import { CompanyService } from '../Services/company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent {
  company: Company = {
    companyId: 0,
    companyName: '',
  };

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the company ID from the route parameter
    const companyId = Number(this.route.snapshot.paramMap.get('id'));

    // Fetch the selected company's data from the service
    this.companyService.getCompanyById(companyId).subscribe((data) => {
      this.company = data;
    });
  }

  onUpdateCompanySubmit(): void {
    // Call the company service to update the company data
    this.companyService.editCompany(this.company.companyId,this.company).subscribe(
      (response) => {
        console.log('Company updated successfully:', response);
        this.router.navigate(['/companies']); // Navigate back to the company list after updating
      },
      (error) => {
        console.error('Error updating company:', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/companies']);
  }
}
