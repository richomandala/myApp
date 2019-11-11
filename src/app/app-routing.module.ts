import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'calculator', loadChildren: './calculator/calculator.module#CalculatorPageModule' },
  { path: 'latihanpage', loadChildren: './latihanpage/latihanpage.module#LatihanpagePageModule' },
  { path: 'bangundatar', loadChildren: './bangundatar/bangundatar.module#BangundatarPageModule' },
  { path: 'persegi', loadChildren: './persegi/persegi.module#PersegiPageModule' },
  { path: 'persegipanjang', loadChildren: './persegipanjang/persegipanjang.module#PersegipanjangPageModule' },
  { path: 'segitiga', loadChildren: './segitiga/segitiga.module#SegitigaPageModule' },
  { path: 'lingkaran', loadChildren: './lingkaran/lingkaran.module#LingkaranPageModule' },
  { path: 'jajargenjang', loadChildren: './jajargenjang/jajargenjang.module#JajargenjangPageModule' },
  { path: 'belahketupat', loadChildren: './belahketupat/belahketupat.module#BelahketupatPageModule' },
  { path: 'layanglayang', loadChildren: './layanglayang/layanglayang.module#LayanglayangPageModule' },
  { path: 'trapesium', loadChildren: './trapesium/trapesium.module#TrapesiumPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
