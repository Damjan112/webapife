import { Company } from "./company";
import { Country } from "./country";

export interface Contact {
  contactId: number;
  contactName: string;
  companyId: number;
  countryId: number;
  company: Company;
  country: Country;
}
