import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-wrapper",
  template: `
    <app-dynamic-form
      [fields]="fields"
      [formGroup]="formGroup"
    ></app-dynamic-form>
  `
})
export class WrapperComponent implements OnInit {
  @Input()
  formGroup: FormGroup;
  @Input()
  fields: any[];
  constructor() {}

  ngOnInit(): void {}
}
