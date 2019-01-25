import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/events-list.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
 
  declarations: [
    EventsAppComponent,
    EventListComponent
  ],
 
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
