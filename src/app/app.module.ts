import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.comopnent';
import { NavBarComponent } from './nav/navbar.component'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
 
  declarations: [
    EventsAppComponent,
    EventListComponent,
    NavBarComponent,
    EventThumbnailComponent
  ],
 
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
