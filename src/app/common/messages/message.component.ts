import { Component, Inject, OnInit, OnDestroy } from "@angular/core";
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MessageService } from "./message.service";
import { Subscription } from "rxjs";
import { MessageModel } from "./message.model";

@Component({
  selector: "app-message",
  template: ""
})
export class MessageComponent implements OnInit, OnDestroy { 

    private _subscription: Subscription;
  
    constructor(private _msg: MatDialog, private _service: MessageService) { }

    ngOnInit() {
        this._subscription = this._service.getMessage().subscribe((message: MessageModel) => {
            this._msg.open(MessageDialogComponent, {
                data: message
            });
        });
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

}

@Component({
  selector: "app-message-dialog",
  templateUrl: "message-dialog.component.html"
})
export class MessageDialogComponent {
  
    constructor(private _dialogRef: MatDialogRef<MessageDialogComponent>, 
                @Inject(MAT_DIALOG_DATA) public message: MessageModel) {}
  
    close(): void {
      this._dialogRef.close();
    }
  
}
  