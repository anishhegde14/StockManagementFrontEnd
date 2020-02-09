import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthGaurd implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let expectedRolesArray = route.data.expectedRoles;
        let userDetails = JSON.parse(localStorage.getItem("userCredentials"))
        let expectedRole: string;
        console.log(userDetails)
        console.log(expectedRolesArray)
        for (let index in expectedRolesArray) {
            
            if (userDetails && (userDetails.role === expectedRolesArray[index])) {
                expectedRole = expectedRolesArray[index];
                return true;
            }
            // if (userDetails && userDetails.message === expectedRole) {
                //     return true;
                // }
                
                    return false;
                
        }
    }
}