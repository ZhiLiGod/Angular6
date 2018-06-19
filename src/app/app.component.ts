import { Component } from '@angular/core';
import { RecordsService } from './records.service';
import { HelloComponent } from './hello/hello.component';


function log(target, name, descriptor) {
	console.log(target, name, descriptor)

	const original = descriptor.value

	// original()

	descriptor.value = function(...args) {
		console.log("args: ", args)
		const result = original.apply(this, args)
		console.log("the result is: ", result)
	}

	return descriptor
}

function log1(className) {
	console.log(className)

	return (...args) => {
		console.log("args passed to this class are", args)
		return new className(...args)
	}
}

// @log1
class myExampleClass {
	constructor(arg1, arg2) {
		console.log("constructor fired")
	}
}

const myClass = new myExampleClass(5, 10)

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	myVar = 'test';
	disabled = false;
	amount = 100.12;
	today = new Date();
	show = true;
	number = 200;
	text = 'test text';

	data = [{
		name: 'zhi',
		online: true
	},
	{
		name: 'li',
		online: false
	}];
	records = {};
	
	constructor(private myFirstService : RecordsService) {
		this.aSimpleMethod(5, 2);
		
	}

	ngOnInit() {
		this.records = this.myFirstService.getData();
		// var resultFromHttpReq = this.myFirstService.getDataFromHttpReq();
		// var rates = this.myFirstService.getFromProxy();
		this.myFirstService.getRate()
			.subscribe(rates => {
				console.log(rates);
			})
	}

	@log
	aSimpleMethod(a, b) {
	 	return a * b;
	}

	clickFunc() {
		this.disabled = !this.disabled;
		// console.log("button called");
	}

	updateValue(e) {
		this.myVar = e.target.value;
		// console.log(e.target.value);
	}
}
