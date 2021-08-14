import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {

  @Input() kanbanBoardTitle: string;

  public kanbanBoardConfig: any =
    {
      catagory: {
        Candidates_List: {
          id: "Candidates_List",
          config_arr: [{
            "id": 1,
            "name": "Rajarajan",
            "skills": "JAVA",
            "expYears": 5,
            "email": "abc@gmail.com",
            "mobile": 9791999999
          }, {
            "id": 2,
            "name": "Radha",
            "skills": "Angular",
            "expYears": 5,
            "email": "abc@gmail.com",
            "mobile": 9791999999
          }, {
            "id": 4,
            "name": "Vijay",
            "skills": "C#",
            "expYears": 5,
            "email": "abc@gmail.com",
            "mobile": 9791999999
          }, {
            "id": 5,
            "name": "Vaishnavi",
            "skills": "Manual Testing",
            "expYears": 5,
            "email": "abc@gmail.com",
            "mobile": 9791999999
          }, {
            "id": 6,
            "name": "Vidhya",
            "skills": "Automation Testing",
            "expYears": 5,
            "email": "abc@gmail.com",
            "mobile": 9791999999
          }, {
            "id": 7,
            "name": "Amala",
            "skills": "Automation Testing",
            "expYears": 5,
            "email": "abc@gmail.com",
            "mobile": 9791999999
          }, {
            "id": 8,
            "name": "Nisha",
            "skills": "Automation Testing",
            "expYears": 5,
            "email": "abc@gmail.com",
            "mobile": 9791999999
          }]
        },
        Technical_Test: {
          id: "Technical_Test",
          config_arr: [{
            "id": 8,
            "name": "Nisha",
            "skills": "Automation Testing",
            "expYears": 5,
            "email": "abc@gmail.com",
            "mobile": 9791999999
          }]
        },
        Interview: {
          id: "Interview",
          config_arr: []
        },
        HR: {
          id: "HR",
          config_arr: []
        },
        Offer_Accepted: {
          id: "Offer_Accepted",
          config_arr: [{
            "id": 11,
            "name": "Rajarajan Kumanan",
            "skills": "C#",
            "expYears": 5,
            "email": "abc@gmail.com",
            "mobile": 9791999999
          },{
            "id": 3,
            "name": "Arun",
            "skills": "Nodejs",
            "expYears": 5,
            "email": "abc@gmail.com",
            "mobile": 9791999999
          },]
        }, Offer_Rejected: {
          id: "Offer_Rejected",
          config_arr: []
        }
      }
    };

  public listOfLists;
  public selectedKanban;

  constructor() { }

  ngOnInit(): void {
    this.listOfLists = Object.keys(this.kanbanBoardConfig.catagory);
    
    if (this.kanbanBoardTitle) {
      this.selectedKanban = this.kanbanBoardConfig.catagory[this.kanbanBoardTitle]
      console.log(this.selectedKanban)
      this.kanbanBoardTitle = this.kanbanBoardTitle.replace("_", " ");
    }
  }


  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
