import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Aluno} from "../common/aluno";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private baseUrl = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) { }

  getAlunos(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/api/aluno/listar`);
  }
}

interface GetResponse {
  _embedded: {
    alunos: Aluno[];
  }
}

