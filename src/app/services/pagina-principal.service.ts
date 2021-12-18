import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Aluno} from "../common/aluno";

@Injectable({
  providedIn: 'root'
})
export class PaginaPrincipalService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

  getTotalAlunos(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/api/aluno/getTotal`);
  }

}
