import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Patient } from './patient/patient.model';
import { Page } from './utils/Page';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private patientUrl = 'http://localhost:8081/api/patients';
  
  // Create the httpOptions object including headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('restuser3:1234')
    })
  };

  constructor(private httpClient: HttpClient) {}

  fetchPatients(page: number, size: number): Observable<Page<Patient>> {
    console.log("Inside Service >> fetchPatients ");
    
    
    // Set the query parameters
    let params = new HttpParams()
        .set('page_no', page.toString())
        .set('page_size', size.toString());


    // Clone the existing httpOptions and append the params
    let httpOptionsWithParams = {
      ...this.httpOptions,
      params: params
    };

      
    // Perform the GET request and handle the response
       return this.httpClient.get<Page<Patient>>(this.patientUrl, httpOptionsWithParams);
      // .pipe(
      //     catchError((error: any) => {
      //         console.error('Error occurred:', error);
      //         return throwError(() => new Error('Error fetching patients'));
      //     }),
      //     map((response: any) => {
      //         // Handle empty response or incorrect data format
      //         if (!response || typeof response !== 'object') {
      //             console.warn('Received unexpected response:', response);
      //             throw new Error('Invalid response format');
      //         }
      //         return response;
      //     })
      // );
    }

    savePatient(patient:Patient): Observable<Patient> {
      console.log("Inside Service >> savePatient ");
      return this.httpClient.post<Patient>(this.patientUrl, patient, this.httpOptions);
    }

    deletePatient(patientId:number): Observable<string> {
      console.log("Inside Service >> deletePatient ");
      return this.httpClient.delete<string>(this.patientUrl+"/"+ patientId.toString());
    }
}
