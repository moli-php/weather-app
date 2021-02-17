import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { WeatherService } from  './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Weather App';
  weatherOptions: string[] = ['London','Wales','York'];
  weathers: object[] = [];
  loader: boolean = true;

  constructor(private service: WeatherService) { 
  }

   onSubmit(form: NgForm) {
    if (form.value.weather) {
      const weather =  form.value.weather;
      this.loader = false;
      this.service.getWeather(weather).subscribe(res => {
        this.weathers.push(res);
        this.loader = true;
      });
    }
  }

}
