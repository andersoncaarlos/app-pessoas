import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/interfaces/pessoa';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  constructor(private profileService: ProfileService) {}
  profiles: Pessoa[] = [];

  ngOnInit() {
    this.profileService.buscarTodos().subscribe((result: Pessoa[]) => {
      this.profiles = result;
    });
  }

}
