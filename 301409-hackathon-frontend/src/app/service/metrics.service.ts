import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';

import { AssociateDetails } from '../models/associateDetails.model';
import { GenericMetrics } from '../models/genericMetrics.model';

@Injectable()
export class MetricsService {

  private associateHeadCountUrl = 'http://localhost:9090/hackFsePortal/hackFseMetricsService/participationMetrics/headCount';
  private uniqueVolunteeringDetailsByLocationUrl = 'http://localhost:9090/hackFsePortal/hackFseMetricsService/participationMetrics/uniqueVolunteeringDetailsByLocation';
  private uniqueVolunteeringDetailsByBUUrl = 'http://localhost:9090/hackFsePortal/hackFseMetricsService/participationMetrics/uniqueVolunteeringDetailsByBU';
  
  constructor(private http: HttpClient) { }
  
  // Participation Metrics starts
  getAssociateHeadCount(): Observable<AssociateDetails[]> {
    return this.http.get<AssociateDetails[]>(this.associateHeadCountUrl);
  }

  getUniqueVolunteeringDetailsByLocation(location): Observable<GenericMetrics[]> {
    return this.http.get<GenericMetrics[]>(this.uniqueVolunteeringDetailsByLocationUrl+'/'+location);
  }

  getUniqueVolunteeringDetailsByBU(businessUnit): Observable<GenericMetrics[]> {
    return this.http.get<GenericMetrics[]>(this.uniqueVolunteeringDetailsByBUUrl+'/'+businessUnit);
  }

  // Participation Metrics ends
  
}