import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import "rxjs/add/observable/empty";
/*
  Generated class for the WineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class WineProvider {

  constructor(private db: AngularFireDatabase) { 

  }

  public getWines(): Observable<any> {
    //return this.http.get('assets/static/wines.json');
    //iliwine-61318

    return this.db.list('/').valueChanges();
  }

}
