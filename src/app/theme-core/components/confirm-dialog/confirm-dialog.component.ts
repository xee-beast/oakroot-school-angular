import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
    selector   : "Oakroot-confirm-dialog",
    templateUrl: "./confirm-dialog.component.html",
    styleUrls  : ["./confirm-dialog.component.scss"]
})
export class OakrootConfirmDialogComponent implements OnInit
{
    public confirmMessage: string;

    constructor(public dialogRef: MatDialogRef<OakrootConfirmDialogComponent>)
    {
    }

    ngOnInit()
    {
    }

}
