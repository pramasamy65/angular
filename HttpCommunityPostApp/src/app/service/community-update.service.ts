import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunityUpdateService {

  constructor(private http: HttpClient) {
  }

  loginMintCommunity() : Observable<string> {

    // Sample Third Party API : https://jsonplaceholder.typicode.com/todos/1
     return this.http.get("assets/files/mint.html", { responseType: 'text' });
  }
}
