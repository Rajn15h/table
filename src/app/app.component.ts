import { Component } from '@angular/core';
import { Customer } from './customerinterface';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './App.Component.html',
})
export class AppComponent {
 customers:Customer[]=[];

 headerOptions:string[]=['Country','Name','Company','Status'];
 selectedHeader:string='';

 selectedGroupField:string='';
 

 
 constructor(private services:ServicesService){}
 ngOnInit():void{
 this.customers=this.services.getData()
}


DropdownChange() {
  if (this.selectedHeader === 'Country') {
    this.selectedGroupField = 'country.name';
  } else if (this.selectedHeader === 'Name') {
    this.selectedGroupField = 'representative.name';
  } else if (this.selectedHeader === 'Company') {
    this.selectedGroupField = 'company';
  } else if (this.selectedHeader === 'Status') {
    this.selectedGroupField = 'status';
  }
}

getDisplayValue(group: any): string {
  if (this.selectedGroupField === 'country.name') {
    return group.country.name;
  } else if (this.selectedGroupField === 'representative.name') {
    return group.representative.name;
  } else if (this.selectedGroupField === 'company') {
    return group.company;
  } else if (this.selectedGroupField === 'status') {
    return group.status;
  } else {
    return '';
  }
}


}
