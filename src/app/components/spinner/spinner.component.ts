import {Component} from '@angular/core';
import {SpinnerService} from "../../subjects/spinner.subject";

@Component({
  selector: 'app-spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: ['spinner.component.scss']
})
export class SpinnerComponent{
  public show : boolean;

  constructor(private spinner : SpinnerService) {
    this.spinner.status.subscribe((status: boolean) => {
      this.show = status;
    });
  }
}
