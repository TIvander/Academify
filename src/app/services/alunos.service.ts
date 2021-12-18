import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Aluno} from "../common/aluno";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {
  }

  getAlunos(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/api/aluno/listar`);
  }

  createAluno(aluno: Aluno): Observable<Object>{
    return this.httpClient.post<Aluno>(`${this.baseUrl}/api/aluno/incluir`, aluno);
  }

  getAlunoById(id: number): Observable<Aluno> {
    return this.httpClient.get<Aluno>(`${this.baseUrl}/api/aluno/get/${id}`)
  }

  updateAluno(id: number, aluno: Aluno): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/api/aluno/editar`, aluno)
  }

  deleteAluno(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/api/aluno/remove/${id}`)
  }
}


interface GetResponse {
  _embedded: {
    alunos: Aluno[];
  }
}

