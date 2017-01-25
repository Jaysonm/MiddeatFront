import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class SpinnerService {
  public status: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _active: boolean = false;

  public get active(): boolean {
    return this._active;
  }

  public set active(v: boolean) {
    this._active = v;
    this.status.next(v);
  }

  public start(): void {
    this.active = true;
  }

  public stop(): void {
    this.active = false;
  }

}
