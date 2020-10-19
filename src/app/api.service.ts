import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private fireService: AngularFirestore,
    private http: HttpClient
  ) {}
  createEmployee(record) {
    return this.fireService.collection('Employees').add(record);
  }
  getEmployee() {
    return this.fireService.collection('Employees').valueChanges();
  }
}
