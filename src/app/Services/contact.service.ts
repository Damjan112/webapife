import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../Interfaces/contact'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://localhost:7070/api'; 

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}/Contact`);
  }
  getContactById(contactId: number): Observable<Contact> {
    const url = `${this.apiUrl}/Contact/${contactId}`;
    return this.http.get<Contact>(url);
  }
  createContact(contact: Contact): Observable<Contact> {
    const url = `${this.apiUrl}/Contact`;
    return this.http.post<Contact>(url, contact);
  }
  editContact(contactId: number, updatedContact: Contact): Observable<Contact> {
    const url = `${this.apiUrl}/Contact/${contactId}`;
    return this.http.put<Contact>(url, updatedContact);
  }
  deleteContact(contactId: number): Observable<any> {
    const url = `${this.apiUrl}/Contact/${contactId}`;
    return this.http.delete(url);
  }
  
  // Method to filter contacts based on companyId and countryId
  filterContacts(companyId: number | null, countryId: number | null): Observable<Contact[]> {
    // Create URL parameters for the companyId and countryId
    const params = new HttpParams()
      .set('companyId', companyId?.toString() || '')
      .set('countryId', countryId?.toString() || '');

    // Make the API call with the parameters
    return this.http.get<Contact[]>(`${this.apiUrl}/Contact/filter`, { params });
  }
}
