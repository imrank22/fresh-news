import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class NewsService {
apiKey = 'd9e7d877fdd6414381464db54792176a';
  constructor(private http: HttpClient) { }

  getAllSources(){
    return this.http.get(`https://newsapi.org/v2/sources?language=en&apiKey=${this.apiKey}`);
  }
  getAllArticles(){
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`)
  }
  getBySource(source){
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${this.apiKey}`)
  }

}
