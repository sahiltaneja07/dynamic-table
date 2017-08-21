import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';
import { Company } from './app.model';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  columns: {name: string, value: boolean}[];
  filterColumns: {name: string, value: boolean}[];
  companies: Company[];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
  	this.appService.getCompanies()
  		.then((companies: Company[]) => {
  			this.companies = companies;
  			this.columns = this.getColumns(this.companies);
  			this.filterColumns = this.columns.map(x => x);
  		});	
  }

  private getColumns(arr): {name: string, value: boolean}[] {
  	let columns = Object.keys(arr[0]);
  	columns.splice(columns.indexOf('description'), 1);
  	columns.splice(columns.indexOf('name'), 1);
  	return columns.map(column => {
  		return {
  			name: column,
  			value: true
  		};
  	});
  }

  scrollRight(): void {
  	$('.table-wrapper').animate({
    	scrollLeft: 500
    }, 500);
  }

  scrollLeft(): void {
  	$('.table-wrapper').animate({
    	scrollLeft: 0
    }, 500);
  }

  onColumnChange(column): void {
  	if(column.value){
  		this.columns.unshift(column);
  	}
  	else{
  		let columnIndex = this.columns.indexOf(column);
  		this.columns.splice(columnIndex, 1);
  	}
  }

  onCustomizeColumnClick(): void {
  	$('.dropdown').toggle(function() {
	    $(".dropdown").animate({top: '25px'}, 1000);
	  }, function() {
	    $(".dropdown").animate({top: '25px'}, 1000);
	  });
  }

}
