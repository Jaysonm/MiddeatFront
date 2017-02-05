import {ModalModule, DropdownModule, TimepickerModule} from "ng2-bootstrap";
import {NgModule} from "@angular/core";

@NgModule({
  imports: [
    ModalModule.forRoot(),
    DropdownModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  exports: [
    ModalModule,
    DropdownModule,
    TimepickerModule
  ]
})

export class AppNgbootstrapModule {}
