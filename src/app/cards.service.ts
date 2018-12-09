import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Word } from './word';
import { WORDS } from './WORDS';
import { XmlparserService } from './xmlparser.service';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private xmlService: XmlparserService) { }

  async getCards(lesson) {
    let arrayObj: Word[] = [];
    let array: string[][] = await this.xmlService.getData();
    array.forEach(element => {
      arrayObj.push(new Word(element[0], element[1], false));
    });
    return of(arrayObj);
  }
}