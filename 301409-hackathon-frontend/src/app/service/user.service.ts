import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';

import { User } from '../models/user.model';

@Injectable()
export class UserService {
  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';
  
  constructor(private http: HttpClient) { }
  
  getUserDetails(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }
  
}