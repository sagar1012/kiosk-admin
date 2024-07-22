// angular import
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonHttpService } from 'src/app/services/common-http.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export default class BreadcrumbComponent {
  form: FormGroup;
  apiUrl = environment.apiUrl;
  weatherData: any;

  constructor(private fb: FormBuilder, private http: CommonHttpService) {
    this.form = this.fb.group({
      latitude: [''],
      longitude: [''],
      altitude: [''],
      maxTemperature: [''],
      minTemperature: [''],
      relHumidityMorning: [''],
      relHumidityAfternoon: [''],
      windSpeed: [''],
      brightSunshineHours: [''],
      evaporation: [''],
      rainFall: [''],
      rainyDays: [''],
      cumulativeRain: ['']
    });
  }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.http.get(`${this.apiUrl}weather`).subscribe(res => {
      if (res) {
        this.weatherData = res;
        this.form.patchValue({
          latitude: this.weatherData.latitude,
          longitude: this.weatherData.longitude,
          altitude: this.weatherData.altitude,
          maxTemperature: this.weatherData.maxTemperature,
          minTemperature: this.weatherData.minTemperature,
          relHumidityMorning: this.weatherData.relHumidityMorning,
          relHumidityAfternoon: this.weatherData.relHumidityAfternoon,
          windSpeed: this.weatherData.windSpeed,
          brightSunshineHours: this.weatherData.brightSunshineHours,
          evaporation: this.weatherData.evaporation,
          rainFall: this.weatherData.rainFall,
          rainyDays: this.weatherData.rainyDays,
          cumulativeRain: this.weatherData.cumulativeRain
        });
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.http.post(`${this.apiUrl}weather`, this.form.value).subscribe(res => {
        alert('Data submitted successfully');
      });
    }
  }
}
