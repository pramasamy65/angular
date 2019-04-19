import { Component, OnInit, ViewChild} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/models/user.model';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { MetricsService } from 'src/app/service/metrics.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './associate-details.component.html'
})
export class AssociateDetailsComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['associateId', 'name', 'designation', 'location', 'buinessUnit'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
  constructor(private metricsService: MetricsService) { }
  
  

  ngOnInit() {
    console.log("AssociateDetailsComponent ngOnInit()");
    this.metricsService.getAssociateHeadCount().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
