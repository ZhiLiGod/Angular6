import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  myVar = "Zhi Li";
  i = 0;
  constructor() { }

  doSomeTasks() {// do not use in {{}} in html
    console.log(`Called ${this.i++} times`);
  }

  ngOnInit() {
  }

}
