import { Component } from '@angular/core';
import { Customer } from './customerinterface';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './App.Component.html',
})
export class AppComponent {
 customers:Customer[]=[];
 headerOptions:string[]=[];
 selectedHeader:string='';
 
 
 constructor(private services:ServicesService){}
 ngOnInit():void{
 this.customers=this.services.getData()
 this.headerOptions=[
  'Country',
  'Name',
  'Company',
  'Status'
 ];
}


}
