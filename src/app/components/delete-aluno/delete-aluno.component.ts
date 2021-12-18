import { Component, OnInit } from '@angular/core';
import {AlunosService} from "../../services/alunos.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Aluno} from "../../common/aluno";

@Component({
  selector: 'app-delete-aluno',
  templateUrl: './delete-aluno.component.html',
  styleUrls: ['./delete-aluno.component.css']
})
export class DeleteAlunoComponent implements OnInit {
  aluno: Aluno = new Aluno();
  id: number = 0;
  constructor(private alunoService: AlunosService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.alunoService.getAlunoById(this.id).subscribe(data =>{
      this.aluno = data;
      this.alunoService.deleteAluno(this.aluno).subscribe(data =>{
        this.goToalunoList();
      },error => console.log(error));

    },error => console.log(error));


  }
  goToalunoList(){
    this.router.navigate(['api/aluno/listar']);
  }

}


