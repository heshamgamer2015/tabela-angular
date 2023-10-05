// livros.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss'],
})
export class LivrosComponent {
  livros = [
    { titulo: 'Livro 1', autor: 'Autor 1' },
    { titulo: 'Livro 2', autor: 'Autor 2' },
    // Adicione mais livros conforme necessário
  ];

  livroForm: FormGroup;
  livroSelecionado: any;

  constructor(private formBuilder: FormBuilder) {
    this.livroForm = this.formBuilder.group({
      titulo: '',
      autor: '',
    });
  }

  adicionarLivro() {
    const novoLivro = this.livroForm.value;
    this.livros.push(novoLivro);
    this.livroForm.reset();
  }

  verDetalhes(livro: any) {
    this.livroSelecionado = livro;
  }
}
