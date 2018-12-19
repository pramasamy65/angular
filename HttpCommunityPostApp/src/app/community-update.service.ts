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
    //https://jsonplaceholder.typicode.com/todos/1
    this.http.get("https://accounts.intuit.com/signin.html", httpOptions1)
      .subscribe(data => console.log(data));

    const httpOptions = {
      headers: new HttpHeaders({
        "Accept": "application/json; charset=utf-8",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/json",
        "Referer": "https://accounts.intuit.com/signin.html"
      })
    };

    this.http.post("https://accounts.intuit.com/access_client/sign_in",
      JSON.stringify({
        "username": "prakashkec@gmail.com",
        "password": "Prak123@65",
        "namespaceId": "50000003"
      }), httpOptions)
      .subscribe(data => console.log(data));
  }
}
