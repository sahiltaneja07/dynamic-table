import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';
import { Company } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  columns: string[];
  companies: Company[];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
  	this.appService.getCompanies()
  		.then((companies: Company[]) => {
  			console.log(companies);
  			this.companies = companies;
  			this.columns = this.getColumns(this.companies);
  		});	
  }

  private getColumns(arr): string[] {
  	let columns = Object.keys(arr[0]);
  	columns.splice(columns.indexOf('description'), 1);
  	columns.splice(columns.indexOf('name'), 1);
  	return columns;
  }

}
