import { StatusBar } from '@ionic-native/status-bar';
import { WineDetailPage } from './../wine-detail/wine-detail';
import { Observable } from 'rxjs/Observable';
import { WineProvider } from './../../providers/wine/wine';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public wines$: Observable<any> = this.wineProvider.getWines();

  public listType: string = 'kaarten';

  constructor(
    public navCtrl: NavController,
    private wineProvider: WineProvider,
    private statusBar: StatusBar
  ) {
      this.statusBar.backgroundColorByHexString('#89714d');

      this.wineProvider.getWines();
  }

  public selectedWine(wine) {
    this.navCtrl.push(WineDetailPage, {wine});
  }

}
