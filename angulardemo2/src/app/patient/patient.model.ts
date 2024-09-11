interface IPatient {
    patientId: number;
    firstName: string;
    lastName: string;
    birthDate: Date,
    address: string
  }
  
  export class Patient implements IPatient {
    patientId!: number;
    firstName!: string;
    lastName!: string;
    birthDate!: Date;
    address!: string;
  }