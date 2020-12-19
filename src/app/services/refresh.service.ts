import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  private subject = new Subject<void>();

  constructor() { }

  refresh() {
    this.subject.next();
  }

  waitRefresh() : Observable<void> {
    return this.subject.asObservable();
  }
}
