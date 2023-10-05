// carros.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss'],
})
export class CarrosComponent {
  carros = [
    { nome: 'Carro 1', ano: 2020 },
    { nome: 'Carro 2', ano: 2022 },
    // Adicione mais carros conforme necessário
  ];

  carroForm: FormGroup;
  carroSelecionado: any;

  constructor(private formBuilder: FormBuilder) {
    this.carroForm = this.formBuilder.group({
      nome: '',
      ano: 0,
    });
  }

  adicionarCarro() {
    const novoCarro = this.carroForm.value;
    this.carros.push(novoCarro);
    this.carroForm.reset();
  }

  verDetalhes(carro: any) {
    this.carroSelecionado = carro;
  }
}
