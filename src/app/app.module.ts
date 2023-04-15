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
import { MatTableModule } from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { GraphminiComponent } from './graphmini/graphmini.component';
import { TrendingComponent } from './trending/trending.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    GrafComponent,
    ListComponent,
    HomeComponent,
    CoindetailComponent,
    FilterPipe,
    GraphminiComponent,
    TrendingComponent,
  
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatSlideToggleModule

   ],
  providers: [  { provide: NgChartsConfiguration, useValue: { generateColors: false }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
