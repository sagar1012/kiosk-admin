// angular import
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonHttpService } from 'src/app/services/common-http.service';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export default class BadgeComponent {
  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  apiUrl = environment.apiUrl;

  constructor(private fb: FormBuilder, private http: CommonHttpService) {
    this.form1 = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      title2: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.form2 = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      title2: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.form3 = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      title2: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });

  }

  ngOnInit() {
    this.getSlide1();
    this.getSlide2();
    this.getSlide3();
  }

  getSlide1() {
    this.http.get(`${this.apiUrl}page/:business`).subscribe(res => {
      if (res) {
        this.form1.patchValue({
          title: res.title,
          title2: res.title2,
          description: res.description
        });
      }
    });
  }
  getSlide2() {
    this.http.get(`${this.apiUrl}page/:manage`).subscribe(res => {
      if (res) {
        this.form2.patchValue({
          title: res.title,
          title2: res.title2,
          description: res.description
        });
      }
    });
  }
  getSlide3() {
    this.http.get(`${this.apiUrl}page/:transformative`).subscribe(res => {
      if (res) {
        this.form3.patchValue({
          title: res.title,
          title2: res.title2,
          description: res.description
        });
      }
    });
  }


  // Getter methods for easy access to form controls in the template
  get title1() { return this.form1.get('title'); }
  get description1() { return this.form1.get('description'); }

  get title2() { return this.form1.get('title'); }
  get description2() { return this.form1.get('description'); }

  get title3() { return this.form1.get('title'); }
  get description3() { return this.form1.get('description'); }

  onSubmitSlide1() {
    if (this.form1.valid) {
      this.http.put(`${this.apiUrl}page/:business`, this.form1.value).subscribe(res => {
        if (res) {
          alert('Content updated successfully');
          this.form1.patchValue({
            title: res.title,
            title2: res.title2,
            description: res.description
          });
          this.getSlide1();
        }
      });
    } else {
      console.log('Form not valid');
    }
  }

  onSubmitSlide2() {
    if (this.form2.valid) {
      this.http.put(`${this.apiUrl}page/:manage`, this.form2.value).subscribe(res => {
        if (res) {
          alert('Content updated successfully');
          this.form2.patchValue({
            title: res.title,
            title2: res.title2,
            description: res.description
          });
          this.getSlide2();
        }
      });
    } else {
      console.log('Form not valid');
    }
  }

  onSubmitSlide3() {
    if (this.form3.valid) {
      this.http.put(`${this.apiUrl}page/:transformative`, this.form3.value).subscribe(res => {
        if (res) {
          alert('Content updated successfully');
          this.form3.patchValue({
            title: res.title,
            title2: res.title2,
            description: res.description
          });
          this.getSlide3();
        }
      });
    } else {
      console.log('Form not valid');
    }
  }

}
