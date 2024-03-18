import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KytHeaderComponent } from './KYT-CustomComponents/kyt-header/kyt-header.component';
import { KytFooterComponent } from './KYT-CustomComponents/kyt-footer/kyt-footer.component';
import { KythomeComponent } from './KYT-CustomComponents/kythome/kythome.component';
import { KytLoginComponent } from './KYT-CustomComponents/kyt-login/kyt-login.component';
import { KytRegisterComponent } from './KYT-CustomComponents/kyt-register/kyt-register.component';
import { KytSearchbarComponent } from './KYT-CustomComponents/kyt-searchbar/kyt-searchbar.component';
import { KytPlpComponent } from './KYT-CustomComponents/kyt-plp/kyt-plp.component';
import { KytClpComponent } from './KYT-CustomComponents/kyt-clp/kyt-clp.component';
import { KytSearchBarComponent } from './KYT-CustomComponents/kyt-search-bar/kyt-search-bar.component';
import { KytClp2Component } from './KYT-CustomComponents/kyt-clp2/kyt-clp2.component';
import { KytClp3Component } from './KYT-CustomComponents/kyt-clp3/kyt-clp3.component';
import { KytPlp1Component } from './KYT-CustomComponents/kyt-plp1/kyt-plp1.component';

@NgModule({
  declarations: [
    AppComponent,
    KytHeaderComponent,
    KytFooterComponent,
    KythomeComponent,
    KytLoginComponent,
    KytRegisterComponent,
    KytSearchbarComponent,
    KytPlpComponent,
    KytClpComponent,
    KytSearchBarComponent,
    KytClp2Component,
    KytClp3Component,
    KytPlp1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
