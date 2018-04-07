import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SelectComponent } from './select/select.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
