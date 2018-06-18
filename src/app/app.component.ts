import { Component } from '@angular/core';

function log(target, name, descriptor) {
	console.log(target, name, descriptor)

	const original = descriptor.value

	// original()

	descriptor.value = function(...args) {
		console.log("args: ", args)
	}

	return descriptor
}

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
