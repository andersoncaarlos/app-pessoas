import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-create-update',
  templateUrl: './profile-create-update.component.html',
  styleUrls: ['./profile-create-update.component.css']
})
export class ProfileCreateUpdateComponent implements OnInit {

  profileForm: FormGroup;
  pessoaId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute) {

    this.profileForm = this.fb.group({
      nome: ['', Validators.required],
      perfil: ['', Validators.required],
      idade: [0, [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      ativo: [true],
      pais: [''],
      nivelExperiencia: ['']
    });
  }

  ngOnInit(): void {
    this.pessoaId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.pessoaId) {
      this.profileService.getPessoaById(this.pessoaId).subscribe(result => {
        this.profileForm.patchValue(result);
      });
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const profile = this.profileForm.value;
      if (this.pessoaId) {
        this.profileService.atualizar(this.pessoaId, profile).subscribe(result => {
          this.toastr.success('Pessoa atualizada com sucesso!!!');
          this.profileForm.reset();
          this.router.navigateByUrl('/profiles');
        });
      } else {
        this.profileService.cadastrar(profile).subscribe(result => {
          this.toastr.success('Pessoa cadastrada com sucesso!!!');
          this.profileForm.reset();
          this.router.navigateByUrl('/profiles');
        });
      }
    }
  }
}
