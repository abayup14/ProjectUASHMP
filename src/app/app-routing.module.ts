import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'addnews',
    loadChildren: () => import('./addnews/addnews.module').then( m => m.AddnewsPageModule)
  },
  {
    path: 'detailnews/:id',
    loadChildren: () => import('./detailnews/detailnews.module').then( m => m.DetailnewsPageModule)
  },
  {
    path: 'searchnews',
    loadChildren: () => import('./searchnews/searchnews.module').then( m => m.SearchnewsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
