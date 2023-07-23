import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../Interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://localhost:7070/api';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/Country`);
  }
  getCountryById(countryId: number): Observable<Country> {
    const url = `${this.apiUrl}/Country/${countryId}`;
    return this.http.get<Country>(url);
  }
  createCountry(country: Country): Observable<Country>{
    const url = `${this.apiUrl}/Country`;
    return this.http.post<Country>(url, country);
  }
  editCountry(countryId: number, updatedCountry: Country): Observable<Country> {
    const url = `${this.apiUrl}/Country/${countryId}`;
    return this.http.put<Country>(url, updatedCountry);
  }
  deleteCountry(countryId: number): Observable<any> {
    const url = `${this.apiUrl}/Country/${countryId}`;
    return this.http.delete(url);
  }
  
}
