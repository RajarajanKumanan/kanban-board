import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [`.mat-drawer-inner-container {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    justify-content: space-around;
    align-content: center;
    align-items: center;
  }`],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}
