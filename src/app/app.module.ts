import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './HomePage/hero/hero.component';
import { GrafComponent } from './HomePage/graf/graf.component';
import { FilterPipe, ListComponent } from './HomePage/list/list.component';
import { HomeComponent } from './HomePage/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { CoindetailComponent } from './homepage/coindetail/coindetail.component';
import { FormsModule } from '@angular/forms';
import { MinigrafComponent } from './minigraf/minigraf.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    GrafComponent,
    ListComponent,
    HomeComponent,
    CoindetailComponent,
    FilterPipe,
    MinigrafComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    FormsModule,
    NgxPaginationModule
    
   ],
  providers: [  { provide: NgChartsConfiguration, useValue: { generateColors: false }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
