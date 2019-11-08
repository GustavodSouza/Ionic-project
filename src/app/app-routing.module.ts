import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'calcular-piquete', loadChildren: './calcular-piquete/calcular-piquete.module#CalcularPiquetePageModule' },
  { path: 'historico-calculo', loadChildren: './historico-calculo/historico-calculo.module#HistoricoCalculoPageModule' },
  { path: 'calcular-consumo-animal', loadChildren: './calcular-consumo-animal/calcular-consumo-animal.module#CalcularConsumoAnimalPageModule' },
  { path: 'detalhes-historico', loadChildren: './detalhes-historico/detalhes-historico.module#DetalhesHistoricoPageModule' },
  { path: 'detalhes-historico-consumo', loadChildren: './detalhes-historico-consumo/detalhes-historico-consumo.module#DetalhesHistoricoConsumoPageModule' },
  { path: 'como-funciona', loadChildren: './como-funciona/como-funciona.module#ComoFuncionaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
