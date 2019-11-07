import { Component, OnInit } from '@angular/core';
import { PiqueteModel } from '../model/piqueteModel';
import { LoadingController, ToastController } from '@ionic/angular';
import { PiqueteDaoService } from '../piqueteDAO/piqueteDAO.service';
import { Router, NavigationExtras } from '@angular/router';
import { ConsumoAnimalModel } from '../model/consumoAnimalModel';

@Component({
  selector: 'app-historico-calculo',
  templateUrl: './historico-calculo.page.html',
  styleUrls: ['./historico-calculo.page.scss'],
})
export class HistoricoCalculoPage implements OnInit {

  public piquete : PiqueteModel[] = [];
  public consumo: ConsumoAnimalModel[] = [];

  constructor(private loading: LoadingController,
              private piqueteDao: PiqueteDaoService,
              private rota: Router,
              private toastController: ToastController) { }

  ngOnInit() {
  }

  //Essa função é a responsável por carregar os dados no começo da tela
  async loadPiquete(){
    let loader = await this.loading.create({
      message : 'Carregando Histórico ...'
    });
    await loader.present();

    this.piqueteDao.getCalculo().then( piquete =>{
      this.piquete = piquete;
      loader.dismiss();
    });

    this.piqueteDao.getCalculoConsumo().then( consumo =>{
        this.consumo = consumo;
      loader.dismiss();
    });
  }
  
   //Chama a função acima para carregar os contatos na tela.
   ionViewWillEnter(){
   this.loadPiquete();
  }

  //Função para mostrar um toast na tela...Nada demais
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Histórico deletado',
      duration: 2000
    });
    toast.present();
  }
  
  deletar(piquete: PiqueteModel): void {
      this.piqueteDao.deletar(piquete.id);
      this.rota.navigate['/historico-calculo'];
      this.loadPiquete();
      this.presentToast();
  }

  piqueteSelecionado(piquete: PiqueteModel): void {
    let extras : NavigationExtras = {
      state : {
       piquete_selecionado : piquete
      }
    }
    
 
    this.rota.navigate(['/detalhes-historico'], extras);
  }

  itemConsumoSelecionado(consumo: ConsumoAnimalModel): void {
    let extras : NavigationExtras = {
      state : {
       consumo_selecionado : consumo
      }
    }
    
 
    this.rota.navigate(['/detalhes-historico-consumo'], extras);
  }

}
