import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  @Input() number: number;
  @Input() text: string;
  // Event Emitter: Name must be {var}+Change
  @Output() numberChange = new EventEmitter<number>();

  myVar = "Zhi Li";
  i = 0;
  constructor() { }

  doSomeTasks() {// do not use in {{}} in html
    console.log(`Called ${this.i++} times`);
  }

  ngOnInit() {
  }

  addOne() {
    this.number++;

    this.numberChange.emit(this.number);
  }

}
