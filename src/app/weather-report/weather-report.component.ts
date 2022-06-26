import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, filter, concatMap, tap } from 'rxjs';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit {
  data$: Observable<any> = new Observable<any>();
  today: Date = new Date();

  loading = false;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.data$ = this.route.params.pipe(
      map(params => params["locationName"]),
      filter(name => !!name),
      tap(() => {
        this.loading = true;
      }),
      concatMap(name => this.weatherService.getWeatherForCity(name)),
      tap(() => {
        this.loading = false;
      })
    );
  }
}
