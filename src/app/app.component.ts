import { ApiService } from './api.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private fireService: ApiService) {}
  model: any = {};
  mobNumberPattern = '[6-9]{1}[0-9]{9}';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  userData;
  ngOnInit() {
    this.getUserData();
  }
  getUserData() {
    this.fireService.getEmployee().subscribe((res) => {
      this.userData = res;
    });
  }
  onSubmit(f: NgForm) {
    $.ajax({
      url: 'https://api.apispreadsheets.com/data/2222/',
      type: 'post',
      data: $('#myForm').serializeArray(),
      success: (success) => {
        alert('Data saved Successfully ');
        this.fireService.createEmployee(this.model).then((res) => {
          f.resetForm();
        });
      },
      error: function () {
        alert('There was an error :(');
      },
    });
  }
  validateAlpha(evt) {
    var keyCode = evt.which ? evt.which : evt.keyCode;
    if (
      (keyCode < 65 || keyCode > 90) &&
      (keyCode < 97 || keyCode > 123) &&
      keyCode != 32
    )
      return false;
    return true;
  }
}
