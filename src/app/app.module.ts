import { WeatherService } from './weather.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppComponent } from './app.component';
import { SummaryComponent } from './component/summary/summary.component';
import { TemperatureComponent } from './component/temperature/temperature.component';
import { TpwComponent } from './component/tpw/tpw.component';
import { ChartComponent } from './component/chart/chart.component';
import { DayTileComponent } from './component/day-tile/day-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    TemperatureComponent,
    TpwComponent,
    ChartComponent,
    DayTileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ChartsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
