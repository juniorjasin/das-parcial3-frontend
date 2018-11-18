export interface Message {

  Text: string;
  Num?: number;
  Title?: string;

}

export class MessageModel {

  private _Text: string;
  private _Num: number;
  private _Title: string;

  constructor(message: Message) {
    this._Text = message.Text;
    this._Num = message.Num ? message.Num : 400;
    this._Title = message.Title;
  }

  set Text(text: string) {
    this._Text = text;
  }

  get Text(): string {
    return this._Text;
  }

  set Num(num: number) {
    this._Num = num;
  }

  get Num(): number {
    return this._Num;
  }

  set Title(title: string) {
    this._Title = title;
  }

  get Title(): string {
    return this._Title;
  }

}	
