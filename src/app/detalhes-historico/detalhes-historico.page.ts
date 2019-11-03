import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PiqueteModel } from '../model/piqueteModel';
import { ToastController } from '@ionic/angular';
import { PiqueteDaoService } from '../piqueteDAO/piqueteDAO.service';

@Component({
  selector: 'app-detalhes-historico',
  templateUrl: './detalhes-historico.page.html',
  styleUrls: ['./detalhes-historico.page.scss'],
})
export class DetalhesHistoricoPage implements OnInit {

  public piquete: PiqueteModel = new PiqueteModel();

  constructor(private rota: Router,
              private rotaAtiva: ActivatedRoute, 
              private toastController: ToastController,
              private piqueteDao: PiqueteDaoService) { 
    this.rotaAtiva.queryParams.subscribe(params => {

      if (this.rota.getCurrentNavigation().extras.state) {
        this.piquete = this.rota
          .getCurrentNavigation().extras
          .state.historico_selecionado;
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

  deletar(piquete: PiqueteModel): void {
    this.piqueteDao.deletar(piquete.id);
    this.rota.navigate(['/historico-calculo']);
    this.presentToast();
}
}
