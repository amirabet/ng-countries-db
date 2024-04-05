import { Component } from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styles: `.alert{
    position: fixed;
    right: 20px;
    bottom: 20px
  }`
})
export class LoadingSpinnerComponent {

}
