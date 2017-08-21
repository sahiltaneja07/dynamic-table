import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Company } from './app.model';

@Injectable()
export class AppService {
	constructor(private http: Http) {}

	getCompanies(): Promise<Company[]> {
		return this.http.get('../assets/companies.json')
		.map(res => res.json())
		.toPromise()
		.then(res => res.companies.map(company => this.formatCompany(company)))
		.catch(err => console.log(err));
	}

	private formatCompany(result): Company {
		return new Company(
			result.description,
			result.employees,
			result.founders,
			result.location,
			result.market,
			result.name,
			result.stage,
			result.website
		);
	}

}
