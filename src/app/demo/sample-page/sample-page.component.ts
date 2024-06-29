// angular import
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonHttpService } from 'src/app/services/common-http.service';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export default class SamplePageComponent {

  form1!: FormGroup;
  apiUrl = environment.apiUrl;
  jobData: any = [];

  constructor(private fb: FormBuilder, private http: CommonHttpService) { }

  ngOnInit(): void {
    this.form1 = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      code: ['', [Validators.required, Validators.minLength(2)]],
      experienceLevel: ['', Validators.required],
      location: ['', Validators.required],
      description: ['']
    });
    this.getJobData();
  }

  get title1() { return this.form1.get('title'); }
  get code1() { return this.form1.get('code'); }
  get experienceLevel1() { return this.form1.get('experienceLevel'); }
  get location1() { return this.form1.get('location'); }
  get description1() { return this.form1.get('description'); }

  onSubmitPoint1() {
    console.log(this.form1);
    
    if (this.form1.valid) {
      this.http.post(`${this.apiUrl}api/job`, this.form1.value).subscribe(res => {
        if (res) {
          this.getJobData();
          alert('Successfully added');
        }
      });
    }
  }

  getJobData() {
    this.http.get(`${this.apiUrl}api/jobs`).subscribe(res => {
      if (res) {
        this.jobData = res;
      }
    });
  }

  deleteItem(i: any) {
    this.http.delete(`${this.apiUrl}api/job/${i._id}`, i._id).subscribe(res => {
      if (res) {
        this.getJobData();
        alert('Successfully deleted');
      }
    });
  }

}
