import { Component, OnInit } from '@angular/core';
import {Aluno} from "../../common/aluno";
import {AlunosService} from "../../services/alunos.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-aluno',
  templateUrl: './update-aluno.component.html',
  styleUrls: ['./update-aluno.component.css']
})
export class UpdateAlunoComponent implements OnInit {
id: number = 2;
aluno: Aluno = new Aluno();
  constructor(private alunoService: AlunosService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.alunoService.getAlunoById(this.id).subscribe(data =>{
      this.aluno = data;
    },error => console.log(error));
  }

  goToalunoList(){
    this.router.navigate(['api/aluno/listar']);
  }

  onSubmit() {
    this.alunoService.updateAluno(this.id, this.aluno).subscribe( data => {
      this.goToalunoList();
    },
      error => console.log(error));

  }

}
