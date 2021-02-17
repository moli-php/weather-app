import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENV_CONSTANTS } from '../shared/EnvConstant';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http: HttpClient) { 
  }

  get options(): any {
    return { 
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'charset': 'UTF-8',
      })
    };
  }

  getWeather(weather_code: string): Observable<object> {
    return this.http.get(ENV_CONSTANTS.api_endpoint + `${weather_code}&appid=${ENV_CONSTANTS.app_id}`);
  }
}
