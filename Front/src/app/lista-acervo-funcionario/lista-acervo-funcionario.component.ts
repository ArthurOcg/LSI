import { AppLivroService } from './../providers/app-livro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-acervo-funcionario',
  templateUrl: './lista-acervo-funcionario.component.html',
  styleUrls: ['./lista-acervo-funcionario.component.css']
})
export class ListaAcervoFuncionarioComponent implements OnInit {

  livros;

  constructor(private servico: AppLivroService) {
    this.livros = servico.getAll();
  }

  ngOnInit() {
  }

}
