import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AlunosService} from "./services/alunos.service";
import {AlunoListComponent} from './components/aluno-list/aluno-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatTable, MatTableModule} from "@angular/material/table";
import {PaginaPrincipalComponent} from './components/pagina-principal/pagina-principal.component';
import {MenuComponent} from './components/menu/menu.component';
import {PaginaPrincipalService} from "./services/pagina-principal.service";
import {RouterModule, Routes} from "@angular/router";
import { NovoAlunoComponent } from './components/novo-aluno/novo-aluno.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import { UpdateAlunoComponent } from './components/update-aluno/update-aluno.component';
import { DeleteAlunoComponent } from './components/delete-aluno/delete-aluno.component';
import { AlunoDetalheComponent } from './components/aluno-detalhe/aluno-detalhe.component';

const routes: Routes = [
  {path: 'api/aluno/getTotal', component: PaginaPrincipalComponent},
  {path: 'api/aluno/listar', component: AlunoListComponent},
  {path: 'api/aluno/incluir', component: NovoAlunoComponent},
  {path: 'api/aluno/get/:id', component: UpdateAlunoComponent},
  {path: 'api/aluno/delete/:id', component: DeleteAlunoComponent},
  {path: 'api/aluno/view/:id', component: AlunoDetalheComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AlunoListComponent,
    PaginaPrincipalComponent,
    MenuComponent,
    NovoAlunoComponent,
    UpdateAlunoComponent,
    DeleteAlunoComponent,
    AlunoDetalheComponent
  ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatTableModule,
        MatToolbarModule,
        MatIconModule,
        FormsModule
    ],
  providers: [AlunosService, PaginaPrincipalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
