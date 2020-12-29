import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadoraRoutes } from './calculadora/calculadora-rounting.module';
import { ConversorRoutes } from './conversor';
import { DashboardRoutes } from './dashboard';
import { JogoDaVelhaRoutes } from './jogo-da-velha';
import { TarefasRoutes } from './tarefas';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  ...DashboardRoutes,
  ...CalculadoraRoutes,
  ...ConversorRoutes,
  ...TarefasRoutes,
  ...JogoDaVelhaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
