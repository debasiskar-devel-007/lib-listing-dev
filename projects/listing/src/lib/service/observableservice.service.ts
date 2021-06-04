import { Injectable } from '@angular/core';
import { Observable, Subject,Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableserviceService {
  private subject = new Subject<any>();

  constructor() { }
  setmultilingualData(data){
    // console.log("observablee data",data);
    this.subject.next(data);
  }
  getmultilingualData(): Observable<any> {
    return this.subject.asObservable();
  }
}


