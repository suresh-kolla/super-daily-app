import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }

  url1="https://api.mlab.com/api/1/databases/fsb8/collections/students";
  apikey="apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz"

  checking(x){
    return this.http.get(
      `${this.url1}?q={"mobile":"${x.mobile}","password":"${x.password}"}&${this.apikey}`
      
    )
  }
}
