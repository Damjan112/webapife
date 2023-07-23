import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/app/Interfaces/contact';
import { ApiService } from '../Services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css'],
})
export class ContactDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public contact: Contact,
    private contactService: ApiService,
    private dialogRef: MatDialogRef<ContactDialogComponent>,
    private router: Router
  ) {}

  onEditClick(): void {
    this.router.navigate(['/edit/contact', this.contact.contactId]);
    this.dialogRef.close();
  }

  onDeleteClick(): void {
    this.contactService.deleteContact(this.contact.contactId).subscribe(
      (response) => {
        console.log('Contact deleted successfully:', response);
        this.dialogRef.close({ deleted: true });
      },
      (error) => {
        console.error('Error deleting contact:', error);
      }
    );
  }
}
