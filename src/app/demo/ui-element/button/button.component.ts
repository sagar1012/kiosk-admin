import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { CommonHttpService } from 'src/app/services/common-http.service';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { environment } from 'src/environments/environment';
import CollapseComponent from '../collapse/collapse.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

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
  id: string | null = null;
  kioskData: any = [];

  constructor(private fb: FormBuilder, private http: CommonHttpService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.mainForm = this.fb.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      description: [''],
      children: this.fb.array([])
    });

    if (this.id)
      this.getKioskData(this.id);
  }

  get children(): FormArray {
    return this.mainForm.get('children') as FormArray;
  }

  getKioskData(id: any) {
    this.http.get(this.apiUrl + `kioskmenu`).subscribe(res => {
      if (res) {
        this.kioskData = res.find((kiosk: any) => kiosk._id === this.id);
        this.setFormValues(this.kioskData);
      }
    });
  }

  setFormValues(data: any) {
    this.mainForm.patchValue({
      title: data.title,
      image: data.image,
      description: data.description,
    });
    this.uploadedImageUrl = 'https://cloud-api.up.railway.app' + data.image;
    const childrenArray = this.mainForm.get('children') as FormArray;
    data.children.forEach((child: any) => {
      childrenArray.push(this.createChildForm(child));
    });
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

  createChildFormAdd(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      image: [''],
      description: [''],
      children: this.fb.array([])
    });
  }

  createChildForm(childData?: any): FormGroup {
    const childForm = this.fb.group({
      title: [childData ? childData.title : '', Validators.required],
      image: [childData ? childData.image : ''],
      description: [childData ? childData.description : ''],
      children: this.fb.array([]),
    });

    if (childData && childData.children) {
      const childChildrenArray = childForm.get('children') as FormArray;
      childData.children.forEach((grandChild: any) => {
        childChildrenArray.push(this.createChildForm(grandChild));
      });
    }

    return childForm;
  }

  asFormGroup(control: AbstractControl): FormGroup {
    return control as FormGroup;
  }

  onSubmit() {
    console.log(this.mainForm.value);
    this.isSubmitted = true;
    if (this.mainForm.valid) {
      if (this.id) {
        this.http.put(this.apiUrl + `kioskmenu/` + this.id, this.mainForm.value).subscribe(res => {
          if (res) {
            alert('Content update successfully');
            this.router.navigate(['/component/home']);
          }
        });
      } else if (!this.id) {
        this.http.post(this.apiUrl + `kioskmenu`, this.mainForm.value).subscribe(res => {
          if (res) {
            alert('Content add successfully');
            this.router.navigate(['/component/home']);
          }
        });
      }

    } else {
      console.log('Form not valid');
      alert('Title and Image required')
    }
  }
}
