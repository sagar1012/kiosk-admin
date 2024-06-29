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
  form1: FormGroup;
  apiUrl = environment.apiUrl;

  constructor(private fb: FormBuilder, private http: CommonHttpService) {
    this.form1 = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      // title2: [''],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });

  }

  ngOnInit() {
    this.getSlide1();
  }

  getSlide1() {
    this.http.get(`${this.apiUrl}page/:impact-insights`).subscribe(res => {
      if (res) {
        this.form1.patchValue({
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

  onSubmitSlide1() {
    if (this.form1.valid) {
      this.http.put(`${this.apiUrl}page/:impact-insights`, this.form1.value).subscribe(res => {
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

}
