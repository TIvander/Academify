import { Component, OnInit } from '@angular/core';
import {AlunosService} from "../../services/alunos.service";
import {Aluno} from "../../common/aluno";

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {

  alunos: Aluno[] = [];
  constructor(private alunoService: AlunosService) { }

  ngOnInit(): void {
    this.listAlunos();
  }
  listAlunos() {
    this.alunoService.getAlunos().subscribe(
      data => {
        this.alunos = data;
      }
    )
  }
}
