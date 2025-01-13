import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctordash',
  templateUrl: './doctordash.component.html',
  styleUrls: ['./doctordash.component.scss']
})
export class DoctordashComponent implements OnInit {

  docId: any;

  constructor() { }

  ngOnInit(): void {
    // Retrieve docId dynamically from localStorage
    this.docId = localStorage.getItem('DOCTOR_ID');
    console.log('Doctor ID:', this.docId);

    
  }

}
