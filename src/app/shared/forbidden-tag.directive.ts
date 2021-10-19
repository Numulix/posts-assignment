import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function forbiddenTagValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let scriptRe = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;
    const forbidden = scriptRe.test(control.value);
    return forbidden ? { forbiddenTag: true } : null;
  };
}
