import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/pages/home/home.component';
import { ProfileListComponent } from './_components/pages/profile/profile-list/profile-list.component';
import { ProfileCreateUpdateComponent } from './_components/pages/profile/profile-create-update/profile-create-update.component';
import { TableComponent } from './_components/table/table.component';

const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "profiles", component: ProfileListComponent},
    {path: "profile/create", component: ProfileCreateUpdateComponent},
    {path: "profile/edit/:id", component: ProfileCreateUpdateComponent}    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
