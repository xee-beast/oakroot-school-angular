import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { DateAdapter } from "@angular/material";
import {MaterialModule} from "./material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { AngularCropperjsModule } from "angular-cropperjs";

import {OakrootPipesModule} from "../pipes/pipes.module";
import {OakrootConfirmDialogComponent} from "../components/confirm-dialog/confirm-dialog.component";
import { FormDialogComponent } from "../components/form-dialog/form-dialog.component";
import {CookieService} from "ngx-cookie-service";
import {TranslateModule} from "@ngx-translate/core";

import { OakrootTableComponent } from "../components/table/table.component";
import {
    OakrootTranslationLoaderService, DataService, ResourceService,
} from "../services";

import {SearchComponent} from "../../helpers/components/search/search.component";
import {SearchDialogComponent} from "../../helpers/components/search/search-dialog.component";
import {ImageCropDialogComponent} from "../../helpers/components/image-cropper/image-crop-dialog.component";
import { LocalStorageService } from "../../helpers/services/local-storage.service";
import { SessionStorageService } from "../../helpers/services/session-storage.service";
import { RouterModule } from "@angular/router";
import { ModalService } from "../components/form-dialog/form-dialog.service";
import {DateFormat} from "../Date-format";
import {OakrootHeaderComponent} from "../components/header/header.component";
import { OakrootSearchBarComponent } from "../components/search-bar/search-bar.component";
import { DraggableDialogDirective } from "../directives/dragable-content/draggable-dialog.directive";

@NgModule({
  declarations: [
    OakrootConfirmDialogComponent,
    FormDialogComponent,
    SearchComponent,
    SearchDialogComponent,
    OakrootTableComponent,
    ImageCropDialogComponent,
    OakrootHeaderComponent,
    OakrootSearchBarComponent,
    DraggableDialogDirective
  ],
  imports: [
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    OakrootPipesModule,
    ReactiveFormsModule,
    AngularCropperjsModule,
    TranslateModule,
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    OakrootPipesModule,
    ReactiveFormsModule,
    TranslateModule,
    SearchComponent,
    SearchDialogComponent,
    FormDialogComponent,
    OakrootTableComponent,
    ImageCropDialogComponent,
    OakrootHeaderComponent,
    OakrootSearchBarComponent,
    DraggableDialogDirective
  ],
  entryComponents: [
    OakrootConfirmDialogComponent,
    FormDialogComponent,
    SearchComponent,
    SearchDialogComponent,
    ImageCropDialogComponent,
    OakrootHeaderComponent,
    OakrootSearchBarComponent,
  ],
  providers: [
    CookieService,
    OakrootTranslationLoaderService,
    DataService,
    ResourceService,
    LocalStorageService,
    SessionStorageService,
    ModalService, { provide: DateAdapter, useClass: DateFormat },

  ]
})

export class SharedModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale("en-in"); // DD/MM/YYYY
  }
}
