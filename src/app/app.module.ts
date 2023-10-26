import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
    DropdownModule,
    TableModule ,
     BrowserAnimationsModule,
     ButtonModule ,
     RippleModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
