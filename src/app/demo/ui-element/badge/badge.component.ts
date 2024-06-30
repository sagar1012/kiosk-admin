// angular import
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonHttpService } from 'src/app/services/common-http.service';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule, RouterModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export default class BadgeComponent {

  apiUrl = environment.apiUrl;
  tableData: any = [];

  constructor(private fb: FormBuilder, private http: CommonHttpService) {


  }

  ngOnInit() {
    this.getSlide1();
  }

  getSlide1() {
    this.http.get(`${this.apiUrl}kioskmenu`).subscribe(res => {
      if (res) {
        this.tableData = res;
      }
    });
  }

  deleteItem(i: any) {
    const confirmed = window.confirm('Are you sure you want to delete this?');
    if (confirmed) {
      this.http.delete(`${this.apiUrl}kioskmenu/${i._id}`, i._id).subscribe(res => {
        if (res) {
          this.getSlide1();
          alert('Successfully deleted');
        }
      });
    }
  }


}
