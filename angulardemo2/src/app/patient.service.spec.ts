import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PatientService } from './patient.service';

describe('PatientService', () => {
  let service: PatientService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Import HttpClientTestingModule for mocking HTTP requests
      providers: [PatientService]  // Provide the service
    });

    service = TestBed.inject(PatientService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();  // Ensure there are no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();  // Check if the service is created successfully
  });

  // it('should fetch patients', () => {
  //   const mockPatients = [
  //     { patientId: 1, firstName: 'John', lastName: 'Doe', birthDate: new Date('1980-01-01'), address: '123 Main St' },
  //     { patientId: 2, firstName: 'Jane', lastName: 'Doe', birthDate: new Date('1985-05-15'), address: '456 Elm St' }
  //   ];

  //   service.fetchPatients().subscribe(patients => {
  //     expect(patients).toEqual(mockPatients);  // Verify that the fetched patients match the mock data
  //   });

  //   const req = httpTestingController.expectOne('http://localhost:8081/api/patients');
  //   expect(req.request.method).toEqual('GET');  // Check that the HTTP request method is GET
  //   req.flush(mockPatients);  // Provide mock data in the response
  // });

  // it('should handle HTTP error', () => {
  //   const errorMessage = 'Server Error';

  //   service.fetchPatients().subscribe(
  //     () => fail('expected an error, not patients'),
  //     (error) => expect(error.message).toContain(errorMessage)  // Verify that the error message contains the expected text
  //   );

  //   const req = httpTestingController.expectOne('http://localhost:8081/api/patients');
  //   req.flush(errorMessage, { status: 500, statusText: 'Server Error' });  // Simulate an HTTP error
  // });
});
