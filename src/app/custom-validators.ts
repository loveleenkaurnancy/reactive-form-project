import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";


export class CustomValidators {


    static asyncInvalidPincode(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value !== '144001') {
                    resolve ({'asyncInvalidPincode': true});
                }
                else {
                    resolve(null);
                }
            },0);
        })
        return promise;
    }

    
}