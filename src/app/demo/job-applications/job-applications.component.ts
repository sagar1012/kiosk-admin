import { Component } from '@angular/core';
import { CommonHttpService } from 'src/app/services/common-http.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-job-applications',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './job-applications.component.html',
  styleUrls: ['./job-applications.component.scss']
})
export default class JobApplicationsComponent {

  apiUrl = environment.apiUrl;
  userData: any = [];

  constructor(private http: CommonHttpService) {
  }

  // life cycle event
  ngOnInit() {
    this.getUserData();
  }
  getUserData() {
    this.http.get(`${this.apiUrl}api/jobApplications`).subscribe(res => {
      if (res) {
        this.userData = res.reverse();
      }
    });
  }

}
