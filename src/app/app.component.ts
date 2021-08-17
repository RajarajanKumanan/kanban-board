import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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

  public section_list: any = {
    section_id: ["c1", "t1", "i1", "h1", "o1", "o2"],
    section_arr: ["Candidates_List", "Technical_Test", "Interview", "HR", "Offer_Accepted", "Offer_Rejected"]
  }

  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.section_list.section_arr, event.previousIndex, event.currentIndex);
  }

}
