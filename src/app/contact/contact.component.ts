import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators, FormGroup, FormControl } from "@angular/forms";

@Component({
	selector: "app-contact",
	templateUrl: "./contact.component.html",
	styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
	formData: FormGroup;
	constructor(private builder: FormBuilder) {}
	ngOnInit() {
		this.formData = this.builder.group({
			fullname: new FormControl("", [Validators.required]),
			email: new FormControl("", [Validators.required, Validators.email]),
			phone: new FormControl("", [Validators.required]),
			category: new FormControl("", [Validators.required]),
			message: new FormControl("", [Validators.required]),
		});
	}
	onSubmit(formData: any) {
		console.log("Sending via email");
	}
}
