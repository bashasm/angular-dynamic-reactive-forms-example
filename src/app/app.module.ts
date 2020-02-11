import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DynamicFormComponent } from "./dynamic/dynamicForm.component";
import { WrapperComponent } from "./dynamic/wrapper.component";

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, WrapperComponent, DynamicFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
