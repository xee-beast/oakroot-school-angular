import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {UserService} from "./user.service";

@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) {
  }

  /**
   * The following checks if the access can be provided or not to the current user
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {boolean}
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl("auth/login").then();
    }
  }

}
