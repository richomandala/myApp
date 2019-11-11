import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LatihanpagePage } from './latihanpage.page';

const routes: Routes = [
  {
    path: '',
    component: LatihanpagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LatihanpagePage]
})
export class LatihanpagePageModule {}
