import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Animations } from '../animations/home.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [Animations.trigger]
})
export class HomeComponent implements OnInit {
  
  goalText: string;
  goalsList: [string];
  btnText: string = 'Add item';

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goalsList = res);
    this._data.changeGoal(this.goalsList);
  }

  addItem() {
    if(!this.goalText)
      return;
    this.goalsList.unshift(this.goalText);
    this.goalText = '';
  }

  removeItem(index:number) {
    this.goalsList.splice(index,1);
    this._data.changeGoal(this.goalsList);
  }
}
