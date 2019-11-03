import { Component, OnInit } from '@angular/core';
import { ConsumoAnimalModel } from '../model/consumoAnimalModel';
import { PiqueteDaoService } from '../piqueteDAO/piqueteDAO.service';

@Component({
  selector: 'app-calcular-consumo-animal',
  templateUrl: './calcular-consumo-animal.page.html',
  styleUrls: ['./calcular-consumo-animal.page.scss'],
})
export class CalcularConsumoAnimalPage implements OnInit {

  public consumo: ConsumoAnimalModel = new ConsumoAnimalModel();

  constructor(private piqueteDao: PiqueteDaoService) { }

  ngOnInit() {
  }

}
