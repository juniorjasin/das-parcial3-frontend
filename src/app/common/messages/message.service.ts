import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { MessageModel } from "./message.model";

@Injectable()
export class MessageService {

  private _subject = new Subject<MessageModel>();

  getMessage(): Observable<MessageModel> {
    return this._subject.asObservable();
  }

  reportMessage(msg: MessageModel): void {
    this._subject.next(msg);
  }

}
