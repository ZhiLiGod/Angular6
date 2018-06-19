import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  debtorId = 1142;
  debtor;
  constructor(private recordService : RecordsService) { }

  ngOnInit() {
    this.debtor = this.recordService
      .getDebtorById(this.debtorId)
      .subscribe(debtor => this.debtor = debtor);
  }
}
