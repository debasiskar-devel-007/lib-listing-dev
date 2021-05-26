import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName][appPhoneMask]'
})
export class PhoneFormatingDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event) {
    this.onInputChange(event.target.value, true);
  }
  

  onInputChange(event, backspace) {
    //console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',event);
    if(event != null && typeof(event) != 'undefined'){
    let newVal = event.replace(/\D/g, '');
    if (backspace && newVal.length <= 6) {
      newVal = newVal.substring(0, newVal.length - 1);
    }
    if (newVal.length === 0) {
     // newVal = '';
       newVal = event.replace(/\D/g, '');
      // this.ngControl.valueAccessor.writeValue(newVal='');
      //console.log('length 0',newVal);
    } else if (newVal.length <= 3) {
      newVal = newVal.replace(/^(\d{0,3})/, '($1)');
     // console.log('length <3',newVal);
    } else if (newVal.length <= 6) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
    //  console.log('length <6',newVal);
    } else if (newVal.length <= 10) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
    //  console.log('length <10',newVal);
    } else {
      newVal = newVal.substring(0, 10);
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
    //  console.log('else',newVal);
    }
    this.ngControl.valueAccessor.writeValue(newVal);
    //console.log(this.ngControl,'lll');
  }
  }

}
