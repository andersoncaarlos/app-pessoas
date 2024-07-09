import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-create-update',
  templateUrl: './profile-create-update.component.html',
  styleUrls: ['./profile-create-update.component.css']
})
export class ProfileCreateUpdateComponent {
  nome = '';
  profileForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    perfil: new FormControl()
  })
}
