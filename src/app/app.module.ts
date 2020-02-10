import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DynamicFormComponent } from "./dynamic/dynamicForm.component";

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, DynamicFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
