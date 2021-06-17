import { PipeTransform } from '@angular/core';
import { ObservableserviceService } from "../service/observableservice.service";
import { ApiService } from "../api.service";
export declare class LanguageTransletPipe implements PipeTransform {
    observableService: ObservableserviceService;
    apiService: ApiService;
    languageDataSet: any;
    convertToLanguageCode: any;
    apiUrl: any;
    dataSet: any;
    constructor(observableService: ObservableserviceService, apiService: ApiService);
    transform(value: any): any;
}
