import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { ProfileCreateUpdateComponent } from './_components/pages/profile/profile-create-update/profile-create-update.component';
import { HomeComponent } from './_components/pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TableComponent } from './_components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileCreateUpdateComponent,
    HomeComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true})
  ],
  providers: [
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
