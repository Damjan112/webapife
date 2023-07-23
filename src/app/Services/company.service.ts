import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../Interfaces/company'; 

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl = 'https://localhost:7070/api'; 

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}/Company`);
  }
  getCompanyById(companyId: number): Observable<Company> {
    const url = `${this.apiUrl}/Company/${companyId}`;
    return this.http.get<Company>(url);
  }
  createCompany(company: Company): Observable<Company> {
    const url = `${this.apiUrl}/Company`;
    return this.http.post<Company>(url, company);
  }
  editCompany(companyId: number, updatedCompany: Company): Observable<Company> {
    const url = `${this.apiUrl}/Company/${companyId}`;
    return this.http.put<Company>(url, updatedCompany);
  }
  deleteCompany(companyId: number): Observable<any> {
    const url = `${this.apiUrl}/Company/${companyId}`;
    return this.http.delete(url);
  }
}
