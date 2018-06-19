import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  obj: Object
}

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  rate;
  constructor(private http : HttpClient) {
    
  }

  getData() {
    return [{
      name: 'zhi',
      online: true
    },
    {
      name: 'li',
      online: false
    }];
  }

  getDataFromHttpReq() {
    return this.http.get<myData>('/rate')
      .subscribe(data => {
        console.log(data);
      });
  }

  getFromProxy() {
    this.rate = this.http
      .get('/debtor/1142')
      .subscribe(data => {
        console.log(data);
      })
  }

  getDebtorById(id) {
    return this.http
      .get(`/debtor/${id}`);
  }

  getRate() {
    return this.http
      .get('/account');
  }
}
