import { Injectable } from '@angular/core';
import { Observable, Subject,Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableserviceService {
  private subject = new Subject<any>();
  private subject1 = new Subject<any>();
  private apiUrlsubject = new Subject<any>();

  constructor() { }
  setmultilingualData(data){
    // console.log("observablee data",data);
    this.subject.next(data);
  }
  getmultilingualData(): Observable<any> {
    return this.subject.asObservable();
  }
  setconvertToLanguage(data){
    // console.log("setconvertToLanguage data",data);
    this.subject1.next(data);
  }
  getconvertToLanguage():Observable<any>{
    return this.subject1.asObservable();

  }
  setapiUrl(data){
    console.log("observablee data",data);
    this.apiUrlsubject.next(data);
  }
  getapiUrl():Observable<any>{
    return this.apiUrlsubject.asObservable();

  }
}


