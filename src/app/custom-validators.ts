import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";


export class CustomValidators {

    static asyncStrongPassword(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value.length < 6) {
                    resolve ({'invalidProjectName': true});
                }
                else {
                    resolve(null);
                }
            },0);
        })
        return promise;
    }

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