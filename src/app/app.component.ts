import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators
} from "@angular/forms";

const countriesData = [
  {
    label: "Alberta",
    abbreviation: "AB"
  },
  {
    label: "British Columbia",
    abbreviation: "BC"
  },
  {
    label: "Manitoba",
    abbreviation: "MB"
  },
  {
    label: "New Brunswick",
    abbreviation: "NB"
  },
  {
    label: "Newfoundland and Labrador",
    abbreviation: "NL"
  },
  {
    label: "Nova Scotia",
    abbreviation: "NS"
  },
  {
    label: "Northwest Territories",
    abbreviation: "NT"
  },
  {
    label: "Nunavut",
    abbreviation: "NU"
  },
  {
    label: "Ontario",
    abbreviation: "ON"
  },
  {
    label: "Prince Edward Island",
    abbreviation: "PE"
  },
  {
    label: "Quebec",
    abbreviation: "QC"
  },
  {
    label: "Saskatchewan",
    abbreviation: "SK"
  },
  {
    label: "Yukon",
    abbreviation: "YT"
  }
];

@Component({
  selector: "app",
  template: `
    <app-dynamic-form
      [fields]="fields"
      [formGroup]="dynamicForm"
    ></app-dynamic-form>
  `
})
export class AppComponent implements OnInit {
  dynamicForm: FormGroup;
  submitted = false;

  fields = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.fields = this.getFields();
    this.dynamicForm = this.createFormGroup();
    this.listenForChanges();
  }

  public getFields(filterBy: string = "") {
    return [
      {
        type: "text",
        id: "filterCountry",
        value: ""
      },
      {
        type: "dropdown",
        id: "countries",
        data: this.filterCountry(filterBy)
      }
    ];
  }

  public listenForChanges() {
    this.dynamicForm.get("countries").disable();
    this.dynamicForm.get("filterCountry").valueChanges.subscribe(val => {
      const value = val.trim().toLowerCase();
      if (!value.length) {
        this.dynamicForm.get("countries").disable();
      } else {
        this.dynamicForm.get("countries").enable();
      }
      this.fields = this.getFields(value);
    });
  }

  public filterCountry(filterBy: string = "") {
    const filtered = countriesData.filter(country =>
      country.label.toLowerCase().includes(filterBy)
    );
    console.log(filtered);
    return filtered;
  }

  public createFormGroup(): FormGroup {
    let group = {};
    this.fields.forEach(field => {
      group[field.id] = new FormControl(field.value, {
        updateOn: "blur",
        validators: [Validators.required]
      });
    });

    return this.formBuilder.group(group);
  }
}
