import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class GifsService {

  private _tagHistory: string[] =[];
  private apiKey:string = 'PQHUIlUhTeL9NYm34i03hcJnzIPUMKfP';
  private servieUrl:string = 'https://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient) { }

  get tagHistory(){
    return [...this._tagHistory];
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase();

    if (this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !==tag)
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0,10);

  }

  searchTag(tag:string):void{
    if (tag.length ===0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('q',tag)
    .set('limit', '10')
    this.http.get(`${this.servieUrl}/search?`,{params})
    .subscribe(resp => {
      console.log(resp);
    })


  }

}
