import { Component } from '@angular/core';
import { Contact } from '../Interfaces/contact';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-create-contact-form',
  templateUrl: './create-contact-form.component.html',
  styleUrls: ['./create-contact-form.component.css'],
})
export class CreateContactFormComponent {
  newContact: Contact = {
    contactId: 0,
    contactName: '',
    companyId: 0,
    countryId: 0,
    company: {
      companyId: 0,
      companyName: ''
    },
    country: {
      countryId: 0,
      countryName: ''
    }
  };

  constructor(private contactService: ApiService, private router: Router) {}

  onCreateContactSubmit(): void {
    if (
      this.newContact.contactId === null ||
      this.newContact.contactName.trim() === '' ||
      this.newContact.companyId === null ||
      this.newContact.countryId === null
    ) {
      alert('All fields are required to create a contact.');
      return;
    }

    if (this.newContact.contactId < 0 || this.newContact.companyId < 0 || this.newContact.countryId < 0) {
      alert('ID cannot be a negative value.');
      return;
    }
    this.contactService.createContact(this.newContact).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }

  goBack(): void {
    this.router.navigate(['/contacts']);
  }
}
