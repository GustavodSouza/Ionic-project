import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalhesHistoricoConsumoPage } from './detalhes-historico-consumo.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesHistoricoConsumoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalhesHistoricoConsumoPage]
})
export class DetalhesHistoricoConsumoPageModule {}
