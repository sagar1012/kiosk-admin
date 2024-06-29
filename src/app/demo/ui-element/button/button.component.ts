import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { CommonHttpService } from 'src/app/services/common-http.service';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { environment } from 'src/environments/environment';
import CollapseComponent from '../collapse/collapse.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule, CollapseComponent, HttpClientModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export default class ButtonComponent {

  mainForm: FormGroup;
  apiUrl = environment.apiUrl;
  uploadedImageUrl!: string;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private http: CommonHttpService) {
    this.mainForm = this.fb.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      description: [''],
      children: this.fb.array([])
    });
  }

  get children(): FormArray {
    return this.mainForm.get('children') as FormArray;
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('image', file);

      this.http.post(this.apiUrl + 'upload', formData).subscribe(
        (response) => {
          console.log('File uploaded successfully', response);
          this.uploadedImageUrl = 'https://cloud-api.up.railway.app' + response.filePath;
          this.mainForm.patchValue({ image: response.filePath });
        },
        (error) => {
          console.error('Error uploading file', error);
        }
      );
    }
  }

  addChild() {
    this.children.push(this.createChildForm());
  }

  removeChild(index: number): void {
    const confirmed = window.confirm('Are you sure you want to delete this?');
    if (confirmed) {
      this.children.removeAt(index);
    }
  }

  createChildForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      description: [''],
      children: this.fb.array([])
    });
  }

  asFormGroup(control: AbstractControl): FormGroup {
    return control as FormGroup;
  }

  onSubmit() {
    console.log(this.mainForm.value);
    // this.isSubmitted = true;
    // if (this.mainForm.valid) {
    //   this.http.post(this.apiUrl + `kioskmenu`, this.mainForm.value).subscribe(res => {
    //     if (res) {
    //       alert('Content added successfully');
    //     }
    //   });
    // } else {
    //   console.log('Form not valid');
    //   alert('Title and Image required')
    // }
  }
}
