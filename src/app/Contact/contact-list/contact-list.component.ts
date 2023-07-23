import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Interfaces/contact';
import { ApiService } from 'src/app/Services/contact.service';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from 'src/app/contact-dialog/contact-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  deletedStatus: boolean = false;
  selectedCompanyId: number | null = null;
  selectedCountryId: number | null = null;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchContacts();
  }

  fetchContacts(): void {
    this.apiService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  applyFilters(): void {
    this.filterContacts(this.selectedCompanyId, this.selectedCountryId);
  }

  // Method to filter contacts based on companyId and countryId
  filterContacts(companyId: number | null, countryId: number | null): void {
    this.apiService.filterContacts(companyId, countryId).subscribe(
      (contacts) => {
        this.contacts = contacts;
      },
      (error) => {
        console.error('Error filtering contacts:', error);
      }
    );
  }

  resetFilters(): void {
    this.selectedCompanyId = null;
    this.selectedCountryId = null;
    this.applyFilters(); // Apply filters to reset the display
  }

  onContactCardClick(contactId: number): void {
    this.apiService.getContactById(contactId).subscribe((contact) => {
      this.opencontactDialog(contact);
    });
  }

  opencontactDialog(contact: Contact): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '400px',
      data: contact,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.deleted === true) {
        this.deletedStatus = true;
        this.fetchContacts();
        setTimeout(() => {
          this.deletedStatus = false;
        }, 3000);
      }
    });
  }
  onCreateContactClick(): void {
    this.router.navigate(['/create-contact']);
  }

  
}
