import { Component, OnInit, Input } from '@angular/core';
import { CardsService } from '../cards.service';
import { Word } from '../word';
import { WORDS } from '../WORDS';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {


  cards: Word[];//to jest wgl undefined juz tutaj
  i: Number | any;
  cardsLength: Number;
  countNumber: number;

  array: any = [
    new Word('Slonce', 'Sun', false),
    new Word('Slon', 'Elephant', false),
  ]

  currentWord: Word = this.array[0];

  @Input() lesson: Number;

  constructor(private cardService: CardsService) {

  }

  changeWord() {

    console.log(this.array)
    // if (this.i < this.cardsLength) {
    this.i++;
    this.currentWord.pl = this.currentWord.en;
    this.currentWord.checked = true;
    speechSynthesis.speak(new SpeechSynthesisUtterance(this.currentWord.en));
    document.getElementById('pointer').style.pointerEvents = 'none';


    setTimeout(function () {
      document.getElementById('pointer').style.pointerEvents = 'auto';
      //tablice sa undefined w timeout
      //if (this.i + 1 !== this.cardsLength) this.currentWord = this.cards[this.i];
      //this.currentWord = this.array[1];
      console.log(this.array)

    }, 2000);
    this.cardCounter();
    console.log(this.array)

    // }
  }

  async getCards() {
    let cards: Observable<Word[]> = await this.cardService.getCards(this.lesson);
    cards.subscribe(function (cards: Word[]) {
      this.cards = cards;
      this.i = 0;

      console.log(cards)
      console.log(this.cards[0])
      this.cardsLength = this.cards.length;
      this.currentWord = this.cards[0];
      console.log(this.currentWord)

    });
  }

  replaceCard() {

  }

  cardCounter() {
    this.countNumber = 0;
    for (let i: number = 0; i < this.array.length; i++) {
      if (this.array[i].checked == false) {
        this.countNumber++;
      }
    }
  }



  ngOnInit() {
    this.getCards();
    this.cardCounter();
    console.log(this.cards);
  }

}
