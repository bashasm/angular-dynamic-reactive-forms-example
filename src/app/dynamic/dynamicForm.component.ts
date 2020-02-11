import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
@Component({
  selector: "app-dynamic-form",
  template: `
    <form [formGroup]="formGroup">
      <div class="form-group col-6" *ngFor="let field of fields">
        <ng-container *ngIf="field.type === 'text'">
          <label>{{ field.id }}</label>
          <input
            type="text"
            formControlName="{{ field.id }}"
            class="form-control"
          />
        </ng-container>

        <ng-container *ngIf="field.type === 'dropdown'">
          <label>{{ field.id }}</label>
          <select formControlName="{{ field.id }}" class="form-control">
            <option value=""></option>
            <option *ngFor="let optionData of field.data">{{
              optionData.label
            }}</option>
          </select>
        </ng-container>
      </div>
    </form>
  `
})
export class DynamicFormComponent implements OnInit {
  @Input()
  formGroup: FormGroup;
  @Input()
  fields: any[];

  constructor() {}

  ngOnInit(): void {}
}
