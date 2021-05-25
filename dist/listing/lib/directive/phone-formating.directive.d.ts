import { NgControl } from '@angular/forms';
export declare class PhoneFormatingDirective {
    ngControl: NgControl;
    constructor(ngControl: NgControl);
    onModelChange(event: any): void;
    keydownBackspace(event: any): void;
    onInputChange(event: any, backspace: any): void;
}
