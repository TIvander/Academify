import {Component, OnInit} from '@angular/core';
import {Aluno} from "../../common/aluno";
import {ActivatedRoute} from "@angular/router";
import {AlunosService} from "../../services/alunos.service";

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {
  id: number = 0
  aluno: Aluno = new Aluno();

  constructor(private route: ActivatedRoute, private alunoService: AlunosService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.alunoService.getAlunoById(this.id).subscribe( data =>{
      this.aluno = data;

    })
  }

}
