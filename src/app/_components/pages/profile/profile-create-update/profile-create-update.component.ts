import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-create-update',
  templateUrl: './profile-create-update.component.html',
  styleUrls: ['./profile-create-update.component.css']
})
export class ProfileCreateUpdateComponent {

  onSubmit() {

  }

  nome = '';
  profileForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    perfil: new FormControl('', Validators.required),
    idade: new FormControl(0, Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    pais: new FormControl(''),
    nivelExperiencia: new FormControl('')
  })
}
