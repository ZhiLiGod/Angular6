import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  obj: Object
}

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

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
    return this.http.get<myData>('http://localhost:1234/file.json')
      .subscribe(data => {
        console.log(data.obj);
      });
  }
}
