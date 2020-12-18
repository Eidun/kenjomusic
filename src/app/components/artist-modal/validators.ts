import { ValidatorFn } from "@angular/forms";

export function dateValidator(): ValidatorFn {
    return control => {
      if (!control.value) return null;
  
      const dateValue = new Date(control.value);
      const today = new Date();
  
      if (today < dateValue) {
        return { wrongDate: true };
      }
      return null;
    }
  }