import { Observable } from 'rxjs';
export declare class ObservableserviceService {
    private subject;
    private subject1;
    constructor();
    setmultilingualData(data: any): void;
    getmultilingualData(): Observable<any>;
    setconvertToLanguage(data: any): void;
    getconvertToLanguage(): Observable<any>;
}
