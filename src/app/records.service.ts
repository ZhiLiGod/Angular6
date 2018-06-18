import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

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
}
