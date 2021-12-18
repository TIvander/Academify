import {Component, OnInit} from '@angular/core';
import {PaginaPrincipalService} from "../../services/pagina-principal.service";

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {
  total?: number;

  constructor(private totalAlunos: PaginaPrincipalService) {
  }

  ngOnInit(): void {
    this.getTotal();
  }

  getTotal() {
    this.totalAlunos.getTotalAlunos().subscribe(
      data => {
        this.total = data;
      }
    )
  }

}
