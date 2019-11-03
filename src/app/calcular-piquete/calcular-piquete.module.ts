import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalcularPiquetePage } from './calcular-piquete.page';

const routes: Routes = [
  {
    path: '',
    component: CalcularPiquetePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CalcularPiquetePage]
})
export class CalcularPiquetePageModule {}
