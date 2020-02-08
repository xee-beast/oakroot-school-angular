import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {TranslateModule} from "@ngx-translate/core";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";

import { AppComponent } from "./app.component";

// Base Components
import { SharedModule } from "./theme-core/modules/shared.module";
import { OakrootBaseComponent } from "./helpers/components/base.component";
import { OakrootFormBaseComponent} from "./helpers/components/form-base.component";
import { OakrootListingBaseComponent} from "./helpers/components/listing-base.component";
import { DialogComponent } from "./helpers/components/dialog/dialog.component";

// Routing constant & library
import * as ROUTE_LIST from "./helpers/constants/routes-list";
import { RouterModule, Routes } from "@angular/router";

// Services
import {OakrootConfigService} from "./theme-core/services";
import {UserService} from "./helpers/services/user.service";
import {SharedDataService} from "./helpers/services/shared-data.service";
import {HelperService} from "./helpers/services/helper.service";
import {BaseNetworkService} from "./helpers/services/base-network.service";
import {PermissionService} from "./helpers/services/permission.service";
import {DataListingService} from "./helpers/services/data-listing.service";
import {OakrootTranslationLoaderService} from "./helpers/services/translation-loader.service";
import {SessionStorageService} from "./helpers/services/session-storage.service";

const appRoutes: Routes = [
 

];


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    OakrootBaseComponent,
    OakrootFormBaseComponent,
    OakrootListingBaseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { onSameUrlNavigation: "reload", useHash: true }),
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    TranslateModule.forRoot(),
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [DialogComponent],
  providers: [
    BaseNetworkService,
    HelperService,
    UserService,
    OakrootConfigService,
    PermissionService,
    OakrootTranslationLoaderService,
    SessionStorageService,
    SharedDataService,
    DataListingService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
