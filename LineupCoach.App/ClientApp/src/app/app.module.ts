import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTeamComponent } from './teams/add-team/add-team.component';
import { TeamsClient } from './lineup-coach-api';

@NgModule({
  declarations: [
    AppComponent,
    AddTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [TeamsClient],
  bootstrap: [AppComponent]
})
export class AppModule { }