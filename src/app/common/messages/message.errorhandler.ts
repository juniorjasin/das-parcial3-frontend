import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { MessageService } from "./message.service";
import { MessageModel } from "./message.model";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class MessageErrorHandler implements ErrorHandler {

  private _messageError: MessageModel;

  constructor(private _service: MessageService, private _ngZone: NgZone) { }

  handleError(err: any) {
    console.log('handleError');

    if (err instanceof HttpErrorResponse || err.rejection instanceof HttpErrorResponse) {

      if (err.rejection != undefined) {
        err = err.rejection;
      }

      this._messageError = new MessageModel({ Text: err.message, Num: err.status });
    }
    else if (err instanceof Error) {
      console.log('handleError - Error');
      this._messageError = new MessageModel({ Text: err.message });
    }
    else {
      this._messageError = new MessageModel({ Text: err.toString() });
    }
    // esto es un timeout porque tiene que ir fuera del hilo de trabajo normal
    this._ngZone.run(() => this._service.reportMessage(this._messageError), 0);
  }

}
