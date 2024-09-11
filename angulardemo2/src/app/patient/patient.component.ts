import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from '../patient.service';
import { FormsModule } from '@angular/forms';
import { Patient } from './patient.model';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})



export class PatientComponent implements OnInit {
    patients: Patient[] = [];
    patientObj: Patient = new Patient;
    username: String = '';
    currentPage: number = 0;
    pageSize: number = 5;
    totalPages: number = 0;
    totalRecords: number = 0;
    @ViewChild('myModal')  model : ElementRef | undefined;

    constructor(private patientService: PatientService,  private cdr: ChangeDetectorRef) {
      this.username = 'Minesh Bhatiya';
      console.log("PatientsComponent >> constructor is called");
    }

    ngOnInit() {
      console.log("Calling Patients.Component >> ngOnInit");
        this.fetchPatients();
    }

    onPageChange(page: number): void {
      console.log("page = "+ page);
      this.currentPage = page;
      this.fetchPatients();
    }
  

    fetchPatients() {
        console.log("Calling Patients.Component >> fetchPatients");
        this.patientService.fetchPatients(this.currentPage, this.pageSize)
            .subscribe(
                (response) => {
                    // console.log("Patient Compoent >> fetchPatients() Response Received");
                    // console.log("response.content >> firstname = " + response.content[0].firstName);
                    // console.log("response.content >> totalPages = " + response.totalPages);
                    

                    this.patients = response.content;
                    this.totalPages = response.totalPages;
                    this.totalRecords = response.totalElements;

                    // console.log("Patients Array:", this.patients);
                    // console.log("totalRecords = " + this.totalRecords);
                    this.cdr.detectChanges();


                },
                (error) => {
                    console.log("Patient Compoent >> fetchPatients() Error Received");                    
                    console.error(error);
                }
          );
    }
    openModal() {
      console.log("Add New patient button clicked!");
      const model = document.getElementById("myModal");
      if(model != null) {
        model.style.display = 'block';
      }
    }

    closeModal() {
      if (this.model && this.model.nativeElement) {
        this.model.nativeElement.style.display = 'none';
      }
    }

   

    saveModal() {
      console.log("Calling Patients.Component >> saveModal");
      console.log(this.patientObj);
      this.patientService.savePatient(this.patientObj)
          .subscribe(
              (response) => {
                  console.log("Patient Compoent >> savePatient() Response Received");
                  this.patientObj = response;
                  this.fetchPatients();
              },
              (error) => {
                  console.log("Patient Compoent >> savePatient() Error Received");
                  console.error(error);
              }
        );
  }

    editPatient(pid:number) {
      console.log("Edit Patient is called for patiend id = " + pid);
    }

    deletePatient(pid:number) {
      console.log("Delete Patient is called for patiend id = " + pid);
      this.patientService.deletePatient(pid)
          .subscribe(
              (response) => {
                  console.log("Patient Compoent >> deletePatient() Response Received");
                  this.fetchPatients();
              },
              (error) => {
                  console.log("Patient Compoent >> deletePatient() Error Received");
                  console.error(error);
              }
        );
    }

}

