// pessoas.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.scss'],
})
export class PessoasComponent {
  pessoas = [
    { nome: 'Pessoa 1', idade: 25 },
    { nome: 'Pessoa 2', idade: 35 },
    // Adicione mais pessoas conforme necessário
  ];

  mostrarApenasMaioresDe30: boolean = false;

  pessoaForm: FormGroup;
  pessoaSelecionada: any;

  constructor(private formBuilder: FormBuilder) {
    this.pessoaForm = this.formBuilder.group({
      nome: '',
      idade: 0,
    });
  }

  adicionarPessoa() {
    const novaPessoa = this.pessoaForm.value;
    this.pessoas.push(novaPessoa);
    this.pessoaForm.reset();
  }

  verDetalhes(pessoa: any) {
    this.pessoaSelecionada = pessoa;
  }
}
