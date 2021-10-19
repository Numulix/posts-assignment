import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

function forbiddenTagValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let scriptRe = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;
    const forbidden = scriptRe.test(control.value);
    return forbidden ? { forbiddenTag: true } : null;
  };
}

@Directive({
  selector: '[forbiddenTag]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenTagDirective,
      multi: true,
    },
  ],
})
export class ForbiddenTagDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return forbiddenTagValidator()(control);
  }
}
