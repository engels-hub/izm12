import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpGetService {

  constructor(private http: HttpClient) { }

  getData(endpoint:string){
    try {
      return this.http.get('http://localhost:3000/'+endpoint, {observe: 'response'});
    } catch (error) {
      console.error(error)
    }
    return null;
  }

  getDate(timestamp:number){
    let date = new Date(timestamp * 1000);

    return date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }
}
