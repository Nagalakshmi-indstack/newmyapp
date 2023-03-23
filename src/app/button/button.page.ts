import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage  {
  selectedDay: string= '';
  days: any = [
    'YES then 5 Marks Added',

    'No'
  ];
  radioChangeHandler(event : any){
    this.selectedDay = event.target.value;
  }
  }



