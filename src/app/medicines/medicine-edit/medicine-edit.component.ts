
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-medicines-edit',
//   imports: [],
//   templateUrl: './medicines-edit.component.html',
//   styleUrl: './medicines-edit.component.scss'
// })
// export class MedicinesEditComponent {

// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine-edit',
  templateUrl: './medicine-edit.component.html',
  styleUrls: ['./medicine-edit.component.scss']
})
export class MedicineEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

