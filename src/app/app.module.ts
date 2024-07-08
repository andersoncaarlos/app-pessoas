import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { ProfileListComponent } from './_components/pages/profile/profile-list/profile-list.component';
import { ProfileCreateUpdateComponent } from './_components/pages/profile/profile-create-update/profile-create-update.component';
import { HomeComponent } from './_components/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileListComponent,
    ProfileCreateUpdateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
