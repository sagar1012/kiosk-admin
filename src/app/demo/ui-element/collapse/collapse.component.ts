// angular import
import { Component, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CommonHttpService } from 'src/app/services/common-http.service';
// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-collapse',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export default class CollapseComponent {
  @Input() formGroup!: FormGroup<any>;
  apiUrl = environment.apiUrl;
  uploadedImageUrl!: string;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private http: CommonHttpService) {
    
   }

  get children(): FormArray {
    return this.formGroup.get('children') as FormArray;
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('image', file);
      // this.http.post(this.apiUrl + 'upload', formData).subscribe(
      //   (response) => {
      //     console.log('File uploaded successfully', response);
      //     this.uploadedImageUrl = 'https://cloud-api.up.railway.app' + response.filePath;
      //     this.formGroup.patchValue({ image: response.filePath });
      //   },
      //   (error) => {
      //     console.error('Error uploading file', error);
      //   }
      // );
    }
  }

  addChild() {
    this.isSubmitted = true;
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
}
