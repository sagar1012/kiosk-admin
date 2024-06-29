// angular import
import { Component, OnInit } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CommonHttpService } from 'src/app/services/common-http.service';

@Component({
  selector: 'app-form-elements',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export default class FormElementsComponent implements OnInit {

  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  form4: FormGroup;
  form5: FormGroup;
  apiUrl = environment.apiUrl;

  constructor(private fb: FormBuilder, private http: CommonHttpService) {
    this.form1 = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      title2: [''],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.form2 = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      title2: [''],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.form3 = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      title2: [''],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.form4 = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      title2: [''],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.form5 = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      title2: [''],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    this.getPoint1();
    this.getPoint2();
    this.getPoint3();
    this.getPoint4();
    this.getPoint5();
  }

  getPoint1() {
    this.http.get(`${this.apiUrl}page/:point1`).subscribe(res => {
      if (res) {
        this.form1.patchValue({
          title: res.title,
          title2: res.title2,
          description: res.description
        });
      }
    });
  }
  getPoint2() {
    this.http.get(`${this.apiUrl}page/:point2`).subscribe(res => {
      if (res) {
        this.form2.patchValue({
          title: res.title,
          title2: res.title2,
          description: res.description
        });
      }
    });
  }
  getPoint3() {
    this.http.get(`${this.apiUrl}page/:point3`).subscribe(res => {
      if (res) {
        this.form3.patchValue({
          title: res.title,
          title2: res.title2,
          description: res.description
        });
      }
    });
  }
  getPoint4() {
    this.http.get(`${this.apiUrl}page/:point4`).subscribe(res => {
      if (res) {
        this.form4.patchValue({
          title: res.title,
          title2: res.title2,
          description: res.description
        });
      }
    });
  }
  getPoint5() {
    this.http.get(`${this.apiUrl}page/:point5`).subscribe(res => {
      if (res) {
        this.form5.patchValue({
          title: res.title,
          title2: res.title2,
          description: res.description
        });
      }
    });
  }

  // Getter methods for easy access to form controls in the template
  get title1() { return this.form1.get('title'); }
  get title11() { return this.form1.get('title2'); }
  get description1() { return this.form1.get('description'); }

  get title2() { return this.form1.get('title'); }
  get title22() { return this.form1.get('title2'); }
  get description2() { return this.form1.get('description'); }

  get title3() { return this.form1.get('title'); }
  get title33() { return this.form1.get('title2'); }
  get description3() { return this.form1.get('description'); }

  get title4() { return this.form1.get('title'); }
  get title44() { return this.form1.get('title2'); }
  get description4() { return this.form1.get('description'); }

  get title5() { return this.form1.get('title'); }
  get title55() { return this.form1.get('title2'); }
  get description5() { return this.form1.get('description'); }

  onSubmitPoint1() {
    if (this.form1.valid) {
      this.http.put(`${this.apiUrl}page/:point1`, this.form1.value).subscribe(res => {
        if (res) {
          alert('Content updated successfully');
          this.form1.patchValue({
            title: res.title,
            title2: res.title2,
            description: res.description
          });
          this.getPoint1();
        }
      });
    } else {
      console.log('Form not valid');
    }
  }

  onSubmitPoint2() {
    if (this.form2.valid) {
      this.http.put(`${this.apiUrl}page/:point2`, this.form2.value).subscribe(res => {
        if (res) {
          alert('Content updated successfully');
          this.form2.patchValue({
            title: res.title,
            title2: res.title2,
            description: res.description
          });
          this.getPoint2();
        }
      });
    } else {
      console.log('Form not valid');
    }
  }

  onSubmitPoint3() {
    if (this.form3.valid) {
      this.http.put(`${this.apiUrl}page/:point3`, this.form3.value).subscribe(res => {
        if (res) {
          alert('Content updated successfully');
          this.form3.patchValue({
            title: res.title,
            title2: res.title2,
            description: res.description
          });
          this.getPoint3();
        }
      });
    } else {
      console.log('Form not valid');
    }
  }

  onSubmitPoint4() {
    if (this.form4.valid) {
      this.http.put(`${this.apiUrl}page/:point4`, this.form4.value).subscribe(res => {
        if (res) {
          alert('Content updated successfully');
          this.form4.patchValue({
            title: res.title,
            title2: res.title2,
            description: res.description
          });
          this.getPoint4();
        }
      });
    } else {
      console.log('Form not valid');
    }
  }

  onSubmitPoint5() {
    if (this.form5.valid) {
      this.http.put(`${this.apiUrl}page/:point5`, this.form5.value).subscribe(res => {
        if (res) {
          alert('Content updated successfully');  
          this.form5.patchValue({
            title: res.title,
            title2: res.title2,
            description: res.description
          });
          this.getPoint5();
        }
      });
    } else {
      console.log('Form not valid');
    }
  }
}
