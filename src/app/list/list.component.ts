import { Component, OnInit, Input } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  selectedValue: number;

  @Input() cardsCom: CardsComponent;

  constructor() { }

  getValue() {
    var e: any = document.getElementById("lessonsSelect");
    var strUser = e.options[e.selectedIndex].value;

    this.selectedValue = strUser;
  }

  ngOnInit() {
    // this.getValue();
    // document.getElementById("changeVal").addEventListener("change", this.getValue);
    //onchange nie dziala
  }

}
