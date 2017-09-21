import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import {ConectFireBase} from './shared/connect.service';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


export const firebaseConfig = {
  
    apiKey: "AIzaSyCtqEdy1GwzCxCWtgeSdVJed8_L3ueLOjw",
    authDomain: "todo-angular-b3c7b.firebaseapp.com",
    databaseURL: "https://todo-angular-b3c7b.firebaseio.com",
    projectId: "todo-angular-b3c7b",
    storageBucket: "",
    messagingSenderId: "1091973964176"

};




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule,
      AngularFireAuthModule
  ],
  providers: [
    ConectFireBase
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
