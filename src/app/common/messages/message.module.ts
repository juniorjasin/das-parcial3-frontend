import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatDialogModule, MatButtonModule } from "@angular/material";
import { MessageComponent, MessageDialogComponent } from "./message.component";
import { MessageErrorHandler } from "./message.errorhandler";
import { MessageService } from "./message.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [
    MessageComponent,
    MessageDialogComponent
  ],
  entryComponents: [
    MessageComponent, 
    MessageDialogComponent
  ],
  exports: [
    MessageComponent,
  ],
  providers: [
    { provide: ErrorHandler, useClass: MessageErrorHandler },
    MessageService
  ]
})
export class MessageModule { }