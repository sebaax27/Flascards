import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { xpath } from 'xpath.js';
import { DOMParser as xmldom } from 'xmldom';

@Injectable({
  providedIn: 'root'
})
export class XmlparserService {

  url = 'http://localhost:3000/xml';

  constructor(private http: HttpClient) { }

  async getData(): Promise<string[][]> {
    // this.http.get(this.url).subscribe((xml) => {
    //   console.log(xml);
    // });
    // let arrays;
    let promise: Promise<string[][]> = fetch(this.url).then(resdata => resdata.json());
    let array: string[][] = await promise;
    return array;
  }
}
