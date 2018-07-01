import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  goalText: string;
  goalsList: [string] = ['Learn Angular'];
  btnText: string = (this.goalsList.length > 1) ? 'Add another item' : 'Add item';

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    if(!this.goalText)
      return;
    this.goalsList.unshift(this.goalText);
    this.goalText = '';
  }
}
