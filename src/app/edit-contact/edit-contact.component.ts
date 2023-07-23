import { Component } from '@angular/core';
import { ApiService } from '../Services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../Interfaces/contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent {
  contact: Contact = {
    contactId: 0,
    contactName: '',
    companyId: 0,
    countryId: 0,
    company: { companyId: 0, companyName: '' },
    country: {
      countryId: 0,
      countryName: '',
    },
  };

  constructor(
    private contactService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the contact ID from the route parameter
    const contactId = Number(this.route.snapshot.paramMap.get('id'));

    // Fetch the selected contact's data from the service
    this.contactService.getContactById(contactId).subscribe((data) => {
      this.contact = data;
    });
  }

  onUpdateContactSubmit(): void {
    // Call the contact service to update the contact data
    this.contactService
      .editContact(this.contact.contactId, this.contact)
      .subscribe(
        (response) => {
          console.log('Contact updated successfully:', response);
          this.router.navigate(['/contacts']); // Navigate back to the contact list after updating
        },
        (error) => {
          console.error('Error updating contact:', error);
        }
      );
  }

  goBack(): void {
    this.router.navigate(['/contacts']);
  }
}
