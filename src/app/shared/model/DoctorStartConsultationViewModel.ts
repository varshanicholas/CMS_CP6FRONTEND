export class StartConsultation {
    AppointmentId: number = 0;
    Symptoms: string = '';
    Diagnosis: string = '';
    DoctorNotes: string | null = null;
    CreatedBy: number = 0;
    Medicines: Medicine[] = [];
    LabTests: LabTest[] = [];
  }
  
  export class Medicine {
    CategoryName: string = '';
    MedicineName: string = '';
    Dosage: string = '';
    Frequency: string = '';
    Quantity: string = '';
  }
  
  export class LabTest {
    LabTestName: string = '';
    CategoryName: string = '';
  }
  