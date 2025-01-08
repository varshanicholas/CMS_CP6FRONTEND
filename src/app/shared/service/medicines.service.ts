import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from '../model/medicines'; // Make sure this model is defined
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MedicinesService {
  // Declare variables
  medicines: Medicine[] = []; // List of medicines
  formMedicineData: Medicine = new Medicine();

  // Constructor injection - Dependency Injection
  constructor(private httpClient: HttpClient) {}

  // 1 - Get All Medicines
  getAllMedicines(): void {
    this.httpClient
      .get(environment.apiUrl + 'medicines') // Replace with the correct endpoint
      .toPromise()
      .then((response?: any) => {
        if (response.Value) {
          this.medicines = response.Value;
          console.log(this.medicines);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // 2 - Insert/Post a Medicine
  insertMedicine(medicine: Medicine): Observable<any> {
    console.log('Insert: In service');
    return this.httpClient.post(environment.apiUrl + 'medicines', medicine);
  }

  // 3 - Update a Medicine
  updateMedicine(medicine: Medicine): Observable<any> {
    console.log('Update: In service');
    return this.httpClient.put(
      environment.apiUrl + 'medicines/' + medicine.MedicineId,
      medicine
    );
  }
}
