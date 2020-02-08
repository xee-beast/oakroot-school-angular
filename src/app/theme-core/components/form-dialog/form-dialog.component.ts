import {
  Inject,
  OnInit,
  ViewChild,
  OnDestroy,
  Component,
  ComponentRef,
  AfterViewInit,
  ViewContainerRef,
  ReflectiveInjector,
  ComponentFactoryResolver
} from "@angular/core";
import { Subscription } from "rxjs";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { ModalService } from "./form-dialog.service";

@Component({
  selector: "Oakroot-form-dialog",
  templateUrl: "./form-dialog.component.html",
})
export class FormDialogComponent implements OnInit, OnDestroy {
  private $modalSubscription: Subscription;

  @ViewChild("template" ,   {
    read: ViewContainerRef,
    static: true
  }) viewContainerRef: ViewContainerRef;

  public componentRef: ComponentRef<any>;
  @ViewChild("draggableDirective" , {static: true}) draggableDirective;

  constructor(public dialogRef: MatDialogRef<FormDialogComponent>,
    public modalService: ModalService,
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalService.modalSource.subscribe((bool: boolean) => {
      if (bool) {
        this.dialogRef.close();
      }
    });
  }

  ngOnInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.data.component);
    if (this.viewContainerRef) {
      this.viewContainerRef.clear();
    }
    this.componentRef = this.viewContainerRef.createComponent(factory);
    this.componentRef.instance.data = this.data.data;
    this.draggableDirective.second = this.data && typeof this.data.data.draggable !== "undefined" ? this.data.data.draggable : true;
  }

  ngOnDestroy() {
    this.modalService.modalSource.next(false);
    this.modalService.refreshDataSource.next(false);
    if (this.$modalSubscription) {
      this.$modalSubscription.unsubscribe();
    }

    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
