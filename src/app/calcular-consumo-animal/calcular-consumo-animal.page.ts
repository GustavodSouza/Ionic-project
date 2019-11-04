import { Component, OnInit } from '@angular/core';
import { ConsumoAnimalModel } from '../model/consumoAnimalModel';
import { PiqueteDaoService } from '../piqueteDAO/piqueteDAO.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calcular-consumo-animal',
  templateUrl: './calcular-consumo-animal.page.html',
  styleUrls: ['./calcular-consumo-animal.page.scss'],
})
export class CalcularConsumoAnimalPage implements OnInit {

  public consumo: ConsumoAnimalModel = new ConsumoAnimalModel();

  constructor(private piqueteDao: PiqueteDaoService,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  async alertaEstacionalidade() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Número inválido!',
      message: 'Estacionalidade deve estar entre 0.1 e 0.2',
      buttons: ['OK']
    });

    await alert.present();
  }
  
  async alertaPerdaDePastejo() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Número inválido!',
      message: 'Perda de pastejo deve estar entre 0.0 e 0.3',
      buttons: ['OK']
    });

    await alert.present();
  }

  calcular(): void {
    let consumoAnimal;
    let msPorHec;
    let msPorHecPorAno;

    if(this.consumo.estacionalidade > 0.2 || this.consumo.estacionalidade < 0.1) {
        this.alertaEstacionalidade();
        return;
    }

    if(this.consumo.perdaPastejo > 0.3 || this.consumo.perdaPastejo < 0.0) {
      this.alertaPerdaDePastejo();
      return;
    }

    consumoAnimal = (this.consumo.ingestaoAnimal * (this.consumo.pesoMedioAnimal * this.consumo.numeroAnimais))/100;
    document.getElementById('resultadoConsumoAnimal').innerHTML = consumoAnimal + ' kg por dia';
   
    msPorHec = (consumoAnimal * 180)/(1 - this.consumo.perdaPastejo);
    document.getElementById('resultadoMsPorHec').innerHTML = msPorHec.toFixed(0) + ' Kg de MS por ano';
    
    msPorHecPorAno = msPorHec / (1 - this.consumo.estacionalidade);
    document.getElementById('resultadoMsPorHecPorAno').innerHTML = msPorHecPorAno.toFixed(0) + ' Kg por ano por Hec';
  }

}
