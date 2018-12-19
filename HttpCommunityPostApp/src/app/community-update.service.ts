import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommunityUpdateService {

  constructor(private http: HttpClient) {
  }

  loginMintCommunity() {

    const httpOptions1 = {
      headers: new HttpHeaders({
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5"
      })
    };

    // Sample Third Party API : https://jsonplaceholder.typicode.com/todos/1
    this.http.get("assets/files/mint.html", { responseType: 'text' })
      .subscribe(data => console.log(data));
  }
}
