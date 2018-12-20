import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { SelectDropDownModule } from 'ngx-select-dropdown'

@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    SelectDropDownModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
       
