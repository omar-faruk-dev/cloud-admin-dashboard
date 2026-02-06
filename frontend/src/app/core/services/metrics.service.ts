import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MetricsService {
  constructor(private readonly http: HttpClient) {}

  getKpis(): Observable<Record<string, number>> {
    return this.http.get<Record<string, number>>('/api/metrics/kpis').pipe(shareReplay(1));
  }
}
