import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WineDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-wine-detail',
  templateUrl: 'wine-detail.html',
})
export class WineDetailPage {

  public wine: any;

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.wine = this.navParams.get('wine');
  }

  ionViewDidLoad() {
    this.loadMap();

    this.addMarker();
  }

  loadMap(){
    let latLng = new google.maps.LatLng(this.wine.location.lat, this.wine.location.lng); //this.wine.location.lat en lng
    
    let mapOptions = {
      center: latLng,
      zoom: 7,
      mapTypeId: 'terrain'
    }
    
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
  }
  
  addMarker(){
      
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
      
    // let content = "<h4>Information!</h4>";         
      
    // this.addInfoWindow(marker, content);

    if(this.wine.location.address) {
      this.addInfoWindow(marker, this.wine.location.address);
    }
      
  }

  addInfoWindow(marker, content){
        
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
        
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
        
  }

}
