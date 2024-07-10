import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-create-update',
  templateUrl: './profile-create-update.component.html',
  styleUrls: ['./profile-create-update.component.css']
})
export class ProfileCreateUpdateComponent {


  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private profileService: ProfileService, private toastr: ToastrService) {    
    this.profileForm = this.fb.group({
      nome: ['', Validators.required],
      perfil: ['', Validators.required],
      idade: [0, [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      pais: [''],
      nivelExperiencia: ['']
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const profile = this.profileForm.value;
      this.profileService.cadastrar(profile).subscribe(result => {
        this.toastr.success('Pessoa cadastrada com sucesso!!!');
        this.profileForm.reset();
      });
    }
  }
}