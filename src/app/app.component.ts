import { Component } from '@angular/core';

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

	consturctor() {
		this.aSimpleMethod(5, 2);
	}

	@log
	aSimpleMethod(a, b) {
	 	return a * b;
	}
}
