import { Component, OnInit } from '@angular/core';
import { ConsumoAnimalModel } from '../model/consumoAnimalModel';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PiqueteDaoService } from '../piqueteDAO/piqueteDAO.service';

@Component({
  selector: 'app-detalhes-historico-consumo',
  templateUrl: './detalhes-historico-consumo.page.html',
  styleUrls: ['./detalhes-historico-consumo.page.scss'],
})
export class DetalhesHistoricoConsumoPage implements OnInit {

  public consumo: ConsumoAnimalModel = new ConsumoAnimalModel();

  constructor(private rotaAtiva: ActivatedRoute,
              private rota: Router, 
              private toastController: ToastController, 
              private piqueteDao: PiqueteDaoService) { 
    this.rotaAtiva.queryParams.subscribe(params => {

      if (this.rota.getCurrentNavigation().extras.state) {
        this.consumo = this.rota
          .getCurrentNavigation().extras
          .state.consumo_selecionado;
      }
    }
    )
  }

  ngOnInit() {
  } 

  //Função para mostrar um toast na tela...Nada demais
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Histórico deletado',
      duration: 2000
    });
    toast.present();
  }

  voltar(): void {
    this.rota.navigate(['/historico-calculo']);
  }

  deletar(consumo: ConsumoAnimalModel): void {
    this.piqueteDao.deletar(consumo.id);
    this.rota.navigate(['/historico-calculo']);
    this.presentToast();
}

}
