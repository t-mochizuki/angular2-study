import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  // このアプリで利用するクラス
  declarations: [
    AppComponent
  ],
  // このアプリで利用するモジュール
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // DI元となるクラス
  providers: [],
  // 最初に起動するコンポーネント
  bootstrap: [AppComponent]
})
export class AppModule { }
