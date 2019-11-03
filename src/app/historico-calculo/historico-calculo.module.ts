import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistoricoCalculoPage } from './historico-calculo.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoCalculoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HistoricoCalculoPage]
})
export class HistoricoCalculoPageModule {}
