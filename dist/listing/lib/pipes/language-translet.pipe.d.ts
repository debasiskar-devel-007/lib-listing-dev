import { PipeTransform } from '@angular/core';
import { ObservableserviceService } from "../service/observableservice.service";
export declare class LanguageTransletPipe implements PipeTransform {
    observableService: ObservableserviceService;
    languageDataSet: any;
    constructor(observableService: ObservableserviceService);
    transform(value: any): any;
}
