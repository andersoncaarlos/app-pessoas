import { Component, Input } from '@angular/core';
import { Pessoa } from 'src/app/interfaces/pessoa';
import { ProfileService } from 'src/app/services/profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() profiles: Pessoa[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.carregarProfiles();
  }

  carregarProfiles() {
    this.profileService.buscarTodos().subscribe((result: Pessoa[]) => {
      this.profiles = result;
    });
  }

  deletarPessoa(id: number) {
    Swal.fire({
      title: 'Deseja realmente excluir esse registro?',
      text: 'Esta ação não pode ser revertida!!!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.profileService.deletar(id).subscribe(
          response => {
            console.log('Pessoa deletada com sucesso!', response);
            this.carregarProfiles();
            Swal.fire('Deletado!', 'A pessoa foi deletada com sucesso.', 'success');
          },
          error => {
            console.error('Erro ao deletar pessoa.', error);
            Swal.fire('Erro!', 'Ocorreu um erro ao deletar a pessoa.', 'error');
          }
        );
      }
    });
  }
}
