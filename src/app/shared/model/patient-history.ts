export interface PatientHistory {
    AppointmentDate: string;
    Symptoms: string;
    Diagnosis: string;
    DoctorNotes: string;
    Specialization: string;
    StaffName: string; // Doctor's name
    Medicines: { MedicineName: string; Dosage: string; Duration: string; Frequency: string }[];
    LabTests: { LabTestName: string; LabTestValue: string; Remarks?: string }[];
  }
  
  // export interface MedicineDetails {
  //   MedicineName: string;
  //   Dosage: string;
  //   Duration: string;
  //   Frequency: string;
  // }
  
  // export interface LabTestDetails {
  //   LabTestName: string;
  //   LabTestValue: string;
  //   Remarks: string;
  // }
  