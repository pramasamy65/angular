import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-associate-details',
  templateUrl: './associate-details.component.html'
})
export class AssociateDetailsComponent implements OnInit {

  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name', 'email', 'phone', 'company'];
  constructor(private userService: UserService) { }


  ngOnInit() {
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.userService.getAssociateDetails();
  }
  disconnect() { }
}
