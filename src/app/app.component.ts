import {Component, OnInit} from '@angular/core';
import {Aluno} from "./common/aluno";
import {AlunosService} from "./services/alunos.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'academify';
  public aluno: Aluno[] = [];
  constructor(private  alunoService: AlunosService) {}
   ngOnInit() {
     this.getAlunos();
   }

  public getAlunos(): void {
      this.alunoService.getAlunos().subscribe(
        (response: Aluno[]) => {
          this.aluno = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

}
