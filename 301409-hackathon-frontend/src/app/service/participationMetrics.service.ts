import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';

import { AssociateDetails } from '../models/associateDetails.model';
import { GenericMetrics } from '../models/genericMetrics.model';

@Injectable()
export class ParticipationMetricsService {

  private associateHeadCountUrl = 'http://localhost:8080/participationMetrics/headCount';
  private uniqueVolunteeringDetailsByLocationUrl = 'http://localhost:8080/participationMetrics/uniqueVolunteeringDetailsByLocation';
  
  constructor(private http: HttpClient) { }
  
  getAssociateHeadCount(): Observable<AssociateDetails[]> {
    return this.http.get<AssociateDetails[]>(this.associateHeadCountUrl);
  }

  getUniqueVolunteeringDetailsByLocation(): Observable<GenericMetrics[]> {
    return this.http.get<GenericMetrics[]>(this.uniqueVolunteeringDetailsByLocationUrl);
  }
  
}