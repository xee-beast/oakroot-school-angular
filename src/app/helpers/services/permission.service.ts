import {Injectable} from "@angular/core";
import {UserService} from "./user.service";
import * as CONSTANT_LIST from "../constants/constant-list";
import { SessionStorageService } from "./session-storage.service";
import { LocalStorageService } from "./local-storage.service";

@Injectable()
export class PermissionService {

    private userService;
    private constantList = CONSTANT_LIST;
    private permissions: Object = {};
    private role: any = {};
  
    constructor(userService: UserService,
      private sessionService: SessionStorageService, private localStorageService: LocalStorageService) {
      this.userService = userService;
      this.permissions = this.sessionService.get("permissions") ?  this.sessionService.getDataInSessionStorage("permissions") :this.localStorageService.getDataInLocalStorage("permissions");
      this.role =  this.sessionService.get("role") ?  this.sessionService.getDataInSessionStorage("role") :this.localStorageService.getDataInLocalStorage("role");
    }
  
    private validrole(): boolean {
      if (!this.role) {
        return false;
      }
  
      const role = this.role;
  
      const name: string | null = role.name;
      const index: number = this.constantList.role.map((role: any) => {
        return role.name;
      }).indexOf(name);
  
      return index !== -1;
    }
  
    checkModulePermission(moduleName: string, permission: string = this.constantList.PERMISSION_READ): boolean {
      if (!this.permissions || !moduleName) {
        return false;
      }
  
      const perm = this.permissions[moduleName];
      if (!perm) {
        return false;
      }
  
      return perm.indexOf(permission) !== -1;
    }
  
    canAccessModule(moduleName: string, permission: string = this.constantList.PERMISSION_READ): boolean {
      return this.checkModulePermission(moduleName, permission);
    }
  
    public isAdmin(): boolean {
      this.role =  this.sessionService.get("ROLE") ?  this.sessionService.getDataInSessionStorage("ROLE") : this.localStorageService.getDataInLocalStorage("ROLE");
      if (this.role == null){
        return false;
      }
      return this.role.slug ===  "admin" || this.role.slug ===  "Oakroot_owner";
    }

    public isGroupOwner(): boolean {
      this.role =  this.sessionService.get("ROLE") ?  this.sessionService.getDataInSessionStorage("ROLE") : this.localStorageService.getDataInLocalStorage("ROLE");
      if (this.role == null){
        return false;
      }
      return this.role.slug ===  "group_owner"; 
    }

    public isBrandOwner(): boolean {
      this.role =  this.sessionService.get("ROLE") ?  this.sessionService.getDataInSessionStorage("ROLE") : this.localStorageService.getDataInLocalStorage("ROLE");
      if (this.role == null){
        return false;
      }
      return this.role.slug ===  "brand_manager"; 
    }

    public isBranchOwner(): boolean {
      this.role =  this.sessionService.get("ROLE") ?  this.sessionService.getDataInSessionStorage("ROLE") : this.localStorageService.getDataInLocalStorage("ROLE");
      if (this.role == null){
        return false;
      }
      return this.role.slug ===  "branch_manager"; 
    }


  public isNotAdmin(): boolean {
    this.role =  this.sessionService.get("role") ?  this.sessionService.getDataInSessionStorage("role") :this.localStorageService.getDataInLocalStorage("role");
    if (this.role == null){
      return false;
    }

    return this.role.name ===  "admin" ;
  }

  public isSuperAdmin(): boolean {
    this.role =  this.sessionService.get("role") ?  this.sessionService.getDataInSessionStorage("role") :this.localStorageService.getDataInLocalStorage("role");
    if (this.role == null){
      return false;
    }

    return this.role.name ===  "super-admin" ;
  }
    /**
   * The following checks if user role is brand owner or not.
   * @returns {boolean}
   */
  public IsBrandOwner(Id: number) {
    return Id === this.constantList.Oakroot_BRAND_MANAGER_ROLE_ID;

  }

}
