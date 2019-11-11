import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PersegipanjangPage } from './persegipanjang.page';

const routes: Routes = [
  {
    path: '',
    component: PersegipanjangPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PersegipanjangPage]
})
export class PersegipanjangPageModule {}
