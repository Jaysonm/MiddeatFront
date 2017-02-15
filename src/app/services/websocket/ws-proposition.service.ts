import {Injectable} from '@angular/core';
import {WebsocketService} from "./websocket.service";
import {Subject} from "rxjs";

const proposition_url = 'ws://localhost:8180/back/proposition/websocket';

@Injectable()
export class WsPropositionService{
  public messages: Subject<Object>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<Object>>wsService
      .connect(proposition_url)
      .map((response: MessageEvent): Object => {
        let data = JSON.parse(response.data);
        return data;
      });
  }
}
