import { Component, OnInit, ViewChild,Input} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/models/user.model';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { MetricsService } from 'src/app/service/metrics.service';

@Component({
  selector: 'app-participation-metric-details',
  templateUrl: './participation-metric-details.component.html'
})
export class ParticipationMetricDetailsComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['employeeId','employeeName', 'totalVolunteerHours', 'livesImpacted', 'totalTravelHours', 'eventDate', 'volunteerFrequency','baseLocation','businessUnit'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() selectedParticiaptionMetric: string;
  
  constructor(private metricsService: MetricsService) { }
  
  

  ngOnInit() {
    // Participation Metrics
    console.log("selectedParticiaptionMetric " + this.selectedParticiaptionMetric);
    if(this.selectedParticiaptionMetric=='location'){
      console.log("ParticipationMetricDetailsComponent ngOnInit() location");
      this.metricsService.getUniqueVolunteeringDetailsByLocation("Chennai").subscribe(
        data => {
          this.dataSource.data = data;
        }
      );
    }else if(this.selectedParticiaptionMetric=='businessUnit'){
      console.log("ParticipationMetricDetailsComponent ngOnInit() businessUnit");
      this.metricsService.getUniqueVolunteeringDetailsByBU("Banking & Financial Services").subscribe(
        data => {
          this.dataSource.data = data;
        }
      );
    }
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
