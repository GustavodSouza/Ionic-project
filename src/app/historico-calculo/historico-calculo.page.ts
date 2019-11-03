import { Component, OnInit } from '@angular/core';
import { PiqueteModel } from '../model/piqueteModel';
import { LoadingController, ToastController } from '@ionic/angular';
import { PiqueteDaoService } from '../piqueteDAO/piqueteDAO.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-historico-calculo',
  templateUrl: './historico-calculo.page.html',
  styleUrls: ['./historico-calculo.page.scss'],
})
export class HistoricoCalculoPage implements OnInit {

  public piquete : PiqueteModel[] = [];

  constructor(private loading: LoadingController,
              private piqueteDao: PiqueteDaoService,
              private rota: Router,
              private toastController: ToastController) { }

  ngOnInit() {
  }

  //Essa função é a responsável por carregar os dados no começo da tela
  async carregando(){
    let loader = await this.loading.create({
      message : 'Carregando Histórico ...'
    });
    await loader.present();

    this.piqueteDao.getCalculo().then( clis =>{
      this.piquete = clis;
      loader.dismiss();
    });

   }

   //Chama a função acima para carregar os contatos na tela.
   ionViewWillEnter(){
    this.carregando();
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
      this.carregando();
      this.presentToast();
  }

  selecionado(piquete: PiqueteModel): void {
    let extras : NavigationExtras = {
      state : {
       historico_selecionado : piquete
      }
    }
 
    this.rota.navigate(['/detalhes-historico'], extras);
  }
}
