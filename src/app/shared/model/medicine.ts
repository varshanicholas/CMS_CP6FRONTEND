import {Medicinecategory} from "./medicinecategory";
export class Medicine {
    MedicineId: number = 0;
    Name: string = '';
    Manufacturer: string = '';
    Price: number = 0;
    MedicinecategoryId: number = 0;
    ExpiryDate: Date = new Date();
    IsActive: boolean = true;  // Add IsActive property



    medicinecategory : Medicinecategory = new Medicinecategory();

  }
  
