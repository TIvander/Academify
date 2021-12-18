import {Component, OnInit} from '@angular/core';
import {AlunosService} from "../../services/alunos.service";
import {Aluno} from "../../common/aluno";
import {Router} from "@angular/router";

@Component({
  selector: 'app-novo-aluno',
  templateUrl: './novo-aluno.component.html',
  styleUrls: ['./novo-aluno.component.css']
})
export class NovoAlunoComponent implements OnInit {
  aluno: Aluno = new Aluno();

  constructor(private alunoService: AlunosService, private router: Router) {
  }

  ngOnInit(): void {
  }

  saveAluno() {
    this.alunoService.createAluno(this.aluno).subscribe(data => {
        console.log(data);
        this.goToalunoList();
      },
      error => console.log(error));
  }

  goToalunoList(){
    this.router.navigate(['api/aluno/listar']);
  }

  onSubmit() {
    console.log(this.aluno);
    this.saveAluno();
  }
}
