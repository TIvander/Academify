import { Component, OnInit } from '@angular/core';
import {AlunosService} from "../../services/alunos.service";
import {Aluno} from "../../common/aluno";
import {Router} from "@angular/router";

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {

  alunos: Aluno[] = [];

  constructor(private alunoService: AlunosService, private router: Router) { }

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
