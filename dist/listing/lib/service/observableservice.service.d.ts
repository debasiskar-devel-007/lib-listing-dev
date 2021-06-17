import { Observable } from 'rxjs';
export declare class ObservableserviceService {
    private subject;
    private subject1;
    private apiUrlsubject;
    constructor();
    setmultilingualData(data: any): void;
    getmultilingualData(): Observable<any>;
    setconvertToLanguage(data: any): void;
    getconvertToLanguage(): Observable<any>;
    setapiUrl(data: any): void;
    getapiUrl(): Observable<any>;
}
