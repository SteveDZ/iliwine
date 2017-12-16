import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WineDetailPage } from './wine-detail';

@NgModule({
  declarations: [
    WineDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(WineDetailPage),
    CommonModule
  ],
})
export class WineDetailPageModule {}
