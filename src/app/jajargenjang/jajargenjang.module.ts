import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JajargenjangPage } from './jajargenjang.page';

const routes: Routes = [
  {
    path: '',
    component: JajargenjangPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JajargenjangPage]
})
export class JajargenjangPageModule {}
