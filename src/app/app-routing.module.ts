import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.page').then(m => m.RegisterPage),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.page').then(m => m.DashboardPage),
  },
  {
    path: 'visitas',
    loadComponent: () =>
      import('./pages/visitas/visitas.page').then(m => m.VisitasPage),
  },
  {
    path: 'trabajos',
    loadComponent: () =>
      import('./pages/trabajos/trabajos.page').then(m => m.TrabajosPage),
  },
  {
    path: 'mantenimiento',
    loadComponent: () =>
      import('./pages/mantenimiento/mantenimiento.page').then(m => m.MantenimientoPage),
  },
  {
    path: 'equipos',
    loadComponent: () =>
      import('./pages/equipos/equipos.page').then(m => m.EquiposPage),
  },
  {
    path: 'limpieza',
    loadComponent: () =>
      import('./pages/limpieza/limpieza.page').then(m => m.LimpiezaPage),
  },
  {
    path: 'reportes',
    loadComponent: () =>
      import('./pages/reportes/reportes.page').then(m => m.ReportesPage),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
