import { Component } from '@angular/core';
import { Pessoa } from 'src/app/interfaces/pessoa';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  constructor(private profileService: ProfileService) {}
  profiles: Pessoa[] = [];

  ngOnInit() {
    this.profileService.buscarTodos().subscribe((result: Pessoa[]) => {
      this.profiles = result;
    });
  }
}
