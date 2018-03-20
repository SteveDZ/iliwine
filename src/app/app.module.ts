import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CommonModule } from '@angular/common';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WineProvider } from '../providers/wine/wine';
import { HttpClientModule } from '@angular/common/http';

export const firebaseConfig = {
  apiKey: 'AIzaSyDdxjhOqCNcD6xn-8esWvcfJLblEMcb0XI',
  authDomain: 'iliwine-61318.firebaseapp.com',
  databaseURL: 'https://iliwine-61318.firebaseio.com',
  projectId: 'iliwine-61318',
  storageBucket: '',
  messagingSenderId: '508229293372'
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'md',
      preloadModules: false
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    CommonModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WineProvider
  ]
})
export class AppModule {}
