import { Component, ViewEncapsulation, Injector, ChangeDetectorRef, HostBinding } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import {MatDialog, MatSnackBar} from "@angular/material";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/timer";
import "rxjs/add/observable/of";

import * as CONST_LIST from "../constants/constant-list";
import * as ROUTE_LIST from "../constants/routes-list";
import * as API_LIST from "../constants/apis-list";
import { OakrootTranslationLoaderService } from "../../theme-core/services";
import { UserService } from "../services/user.service";
import { DataListingService } from "../services/data-listing.service";
import { HelperService } from "../services/helper.service";
import { PermissionService } from "../services/permission.service";
import { SharedDataService } from "../services/shared-data.service";
import {DomSanitizer} from "@angular/platform-browser";
import { DialogComponent } from "src/app/helpers/components/dialog/dialog.component";
import { ModalService } from "../../theme-core/components/form-dialog/form-dialog.service";
import { FormDialogComponent } from "src/app/theme-core/components/form-dialog/form-dialog.component";



/*
 * Base Component
 * Top Level Component
 */
@Component({
  selector: "oakroot-base-component",
  encapsulation: ViewEncapsulation.None,
  template: ""
})
export class OakrootBaseComponent {

  public FAILED_STATUS = true;
  public SUCCESS_STATUS = false;
  public ERROR_MSG: any;
  public constantList = CONST_LIST;
  // kept public as its used in templates as well
  public routeList = ROUTE_LIST;
  public apiList = API_LIST;
  public router: Router;
  public route: ActivatedRoute;
  public userService: UserService;
  public dataListService: DataListingService;
  public translationLoader: OakrootTranslationLoaderService;
  public translate: TranslateService;
  public snackBar: MatSnackBar;
  public location: Location;
  public helperService: HelperService;
  public permissionService: PermissionService;
  public cd: ChangeDetectorRef;
  public sharedDataService: SharedDataService;
  public sanitizer: DomSanitizer;

  /**
   * the following boolean make sure to disable the button once the form is submitted
   * @type {boolean}
   */
  private _isFormSubmitted;
  /**
   * the following variable will allow us to downcast this instance to respective child instance whenever required
   */
  public baseModel;

  /**
   * the following dialog ref store instance of form dialog component
   */
  public formDialogRef: any;
  /**
   * the following is used to keep the reference of the mat dialog
   */
  public matDialog: MatDialog;


  /**
   * the following keeps holds of the shared moal service
   */
  public formDialogService: ModalService;



  @HostBinding("class.overflow") someField = true;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this.cd = injector.get(ChangeDetectorRef);
    this.location = injector.get(Location);
    this.snackBar = injector.get(MatSnackBar);
    this.route = injector.get(ActivatedRoute);
    this.matDialog = injector.get(MatDialog);
    this.formDialogService = injector.get(ModalService);
    this.userService = injector.get(UserService);
    this.dataListService = injector.get(DataListingService);
    this.translate = injector.get(TranslateService);
    this.translationLoader = injector.get(OakrootTranslationLoaderService);
    // this.baseModel = new BaseModel();
    this.helperService = injector.get(HelperService);
    this.permissionService = injector.get(PermissionService);
    this.sharedDataService = injector.get(SharedDataService);
    this.sanitizer = injector.get(DomSanitizer);
  }

  /**
   * To get the FormSubmitted Value
   * @returns {boolean}
   */
  get isFormSubmitted(): boolean {
    return this._isFormSubmitted;
  }

  /**
   * To set the FormSubmitted Value
   * @param {boolean} value
   */
  set isFormSubmitted(value: boolean) {
    // updating the shared variable that is shared across the app, even by those which do not inherit from Oakroot Base Component

    setTimeout(() => {
      // this.cd.detectChanges();
      this.helperService.isFormSubmittedSharedVariable = value;
      this._isFormSubmitted = value;
    }, 250);
  }

  /**
   * The following method is used to take the user to a link, with delay if given
   * @param {string} link
   * @param {number} delay
   */
  goTo(link: string, delay?: number): void {
    if (delay) {
      Observable.timer(delay)
        .subscribe(() => {
          this.router.navigateByUrl(link).then();
        });
    } else {
      this.router.navigateByUrl(link).then();
    }
  }

  cancel() {
    this.location.back();
  }


   /**
   * The following method is used for go to dashboard respective user
   */
  goToDashboard() {
    if (this.permissionService.isGroupOwner()) {
      this.router.navigateByUrl(this.routeList.GROUP_DASHBOARD).then();
    } else if (this.permissionService.isBrandOwner() || this.permissionService.isBranchOwner()) {
      this.router.navigateByUrl(this.routeList.BRAND_DASHBOARD).then();
    } else {
      this.router.navigateByUrl(this.routeList.DASHBOARD_DETAILS).then();
    }
  }

  /**
   * @description: The following method open dynamic component into FormDialogComponent
   * @param component param
   * @param options param
   */
  openFormDialog(component: any, options: any = {}): any {
     // creating a dialogRef i.e. opening up a dialog and keeping a reference to it
     if (!options.data) {
      options["data"] = {};
    }

    options.data["component"] = component;
    // adding the draggable paramters to the respective dialog box
    options.data.draggable = options.draggable !== "undefined" ? options.draggable : true;

    const dialogData = {
      width: options && options.width ? options.width : this.constantList.POP_UP_LARGE_WIDTH,
      data: {
        component: component,
        data: options.data || null,
      },
      panelClass: "custom-dialog",
    };
    // if explicitly height is set
    if (options && options.height) {
      dialogData["height"] = options.height;
    }
    if (options && options.width) {
      dialogData["width"] = options.width;
    }
    this.formDialogRef = this.matDialog.open(FormDialogComponent, dialogData);
    this.formDialogRef.disableClose = options.hasOwnProperty("disableClose") ? options.disableClose : true;

    return this.formDialogRef;
  }

  /**
   * The following method used to close form dialog component
   */
  closeFormDialog(data: any = null, close: boolean = true): void {
    if (this.formDialogRef && this.formDialogRef.componentInstance) {
      if (close) {
        this.formDialogRef.componentInstance.modalService.close(data);
      }
      this.formDialogRef = null;
    } else {
      this.formDialogService.close(data);
    }
  }

  public getCurrentDate(dateString?: string) {
    return dateString && typeof dateString !== "undefined" ? new Date(dateString) : new Date();
  }

  confirmDeleteItem(options?: any): any {
    return this.matDialog.open(DialogComponent, {
      width: "60vh",
      data: {
        title: options && options.title ? options.title : "Confirmation",
        text: options && options.text ? options.text : "Are you sure you want to delete this record?",
        textColor: options && options.textColor ? options.textColor : "black",
      }
    });
  }

  /**
   * The following method is used to show the snack bar with respective message
   * @param message
   */
  showSnackBarWithMessage(message): void {
    this.snackBar.open(Array.isArray(message) ? message[0] : message,
      this.constantList.DEFAULT_SNACKBAR_LABEL,
      {
        duration: this.constantList.DEFAULT_SNACKBAR_DURATION,
        verticalPosition: "bottom"
      }
    );
  }

  truncateText(str: string | null, startIndex: number = 0, limit: number, ellipsisChar: string = "..."): string {
    if (str) {
      let retVal = str.substring(startIndex, limit);
      if (str.length > limit) {
        retVal += ellipsisChar;
      }
      return retVal;
    }
    return "";
  }


  /**
   * The following check if its edit mode
   * @returns {string | null}
   */
  isEditMode(): string | null {
    return this.route.snapshot.paramMap.get("id");
  }

  statusToggleChanged(event: any): void {
    // getting div > span > strong element to set the updated text
    event.source._elementRef.nativeElement.parentElement.children[0].children[0].innerText = event.checked
      ? "ACTIVE"
      : "INACTIVE";
  }


  /**
   *  the following method is used to update the success response
   * @param {string} message
   * @param {string} redirectUrl
   */
  protected isSuccessful(message?: string, redirectUrl?: string, redirectionTime?: number): void {
    this.FAILED_STATUS = false;
    this.SUCCESS_STATUS = true;
    this.ERROR_MSG = [];
    this.isFormSubmitted = false;
    // if message given show the success bar
    if (message) {
      this.snackBar.open(message, null, {
        duration: this.constantList.DEFAULT_SNACKBAR_DURATION,
        verticalPosition: "bottom"
      });
    }

    // if redirection URL given
    if (redirectUrl) {
      this.goTo(redirectUrl, redirectionTime ? redirectionTime : this.constantList.DEFAULT_REDIRECTION_WAIT_TIME);
    }
  }

  /**
   * The following method is used to update the failure response
   * @param {any[]} errorMessage
   */
  protected isFailure(errorMessage: string[]): void {
    this.FAILED_STATUS = true;
    this.SUCCESS_STATUS = false;
    this.ERROR_MSG = errorMessage;
    this.isFormSubmitted = false;
    this.snackBar.open(Array.isArray(this.ERROR_MSG) ? this.ERROR_MSG[0] : this.ERROR_MSG, this.constantList.DEFAULT_SNACKBAR_LABEL, {
      duration: this.constantList.DEFAULT_SNACKBAR_DURATION,
      verticalPosition: "bottom"
    });
  }



  canAccessModule(moduleName: string) {
    if (!this.permissionService.canAccessModule(moduleName)) {
      this.redirectToLandingPageByrole(this.userService.role[0].role[0].name);
    }
  }

  redirectToLandingPageByrole(roleName: string | undefined) {
    if (roleName) {
      switch (roleName) {
        case "support team":
          this.router.navigate([this.routeList.MACHINE_MAINTENANCE_HOME]);
          break;

        default:
          this.router.navigate([this.routeList.DASHBOARD_DETAILS]);
          break;
      }
    }
  }

  getChunkArray(array: any[], chunkSize: number = 2): any[] {
    if (!array) {
      return array;
    }

    const chunkedMaps = []
    const tmpArray = Array.from(array);
    for (let i = 0; i < array.length; i += chunkSize) {
      const chunked = tmpArray.slice(i, i + chunkSize)
      chunkedMaps.push(chunked);
    }

    return chunkedMaps;
  }
}
