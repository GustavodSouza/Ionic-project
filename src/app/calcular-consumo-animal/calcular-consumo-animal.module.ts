import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalcularConsumoAnimalPage } from './calcular-consumo-animal.page';

const routes: Routes = [
  {
    path: '',
    component: CalcularConsumoAnimalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CalcularConsumoAnimalPage]
})
export class CalcularConsumoAnimalPageModule {}
