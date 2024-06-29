// angular import
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonHttpService } from 'src/app/services/common-http.service';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-core-apex',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './core-apex.component.html',
  styleUrls: ['./core-apex.component.scss']
})
export default class CoreApexComponent implements OnInit {

  apiUrl = environment.apiUrl;
  userData: any = [];

  constructor(private http: CommonHttpService) {
  }

  // life cycle event
  ngOnInit() {
    this.getUserData();
  }
  getUserData() {
    this.http.get(`${this.apiUrl}api/customers`).subscribe(res => {
      if (res) {
        this.userData = res.reverse();
      }
    });
  }

}
