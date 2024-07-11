import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private route: ActivatedRoute
  ) {
    this.profileForm = this.fb.group({
      nome: ['', Validators.required],
      perfil: ['', Validators.required],
      idade: [, [Validators.required, this.maxValue(99), Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      ativo: [true],
      pais: [''],
      nivelExperiencia: ['']
    });
  }

  ngOnInit(): void {
    this.pessoaId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.pessoaId) {
      this.profileService.getPessoaById(this.pessoaId).subscribe(
        result => {
          this.profileForm.patchValue(result);
        },
        error => {
          this.toastr.error('Erro ao carregar os dados da pessoa');
        }
      );
    }
  }

  onSubmit(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      this.toastr.error('Por favor, corrija os erros no formulário.');
      return;
    }

    const profile = this.profileForm.value;
    if (this.pessoaId) {
      this.profileService.atualizar(this.pessoaId, profile).subscribe(
        result => {
          this.toastr.success('Pessoa atualizada com sucesso!!!');
          this.profileForm.reset();
          this.router.navigateByUrl('/profiles');
        },
        error => {
          this.toastr.error('Erro ao atualizar a pessoa');
        }
      );
    } else {
      this.profileService.cadastrar(profile).subscribe(
        result => {
          this.toastr.success('Pessoa cadastrada com sucesso!!!');
          this.profileForm.reset();
          this.router.navigateByUrl('/profiles');
        },
        error => {
          this.toastr.error('Erro ao cadastrar a pessoa');
        }
      );
    }
  }

  maxValue(max: number) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (value !== null && value !== undefined && (isNaN(value) || value > max)) {
        return { 'maxValue': { max } };
      }
      return null;
    };
  }

  get nome() { return this.profileForm.get('nome'); }
  get perfil() { return this.profileForm.get('perfil'); }
  get idade() { return this.profileForm.get('idade'); }
  get email() { return this.profileForm.get('email'); }
}
