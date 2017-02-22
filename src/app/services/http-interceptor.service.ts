import { Injectable } from '@angular/core';
import {Response, Headers, RequestOptions, RequestOptionsArgs, Request, Http, ConnectionBackend} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HttpInterceptorService extends Http {
  private urlback = 'http://localhost:8180/back/';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  private token = localStorage.getItem('token');

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  /**
   * Performs any type of http request.
   * @param url
   * @param options
   * @returns {Observable<Response>}
   */
  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, this.requestOptions(options));
  }

  /**
   * Performs a request with `get` http method.
   * @param url
   * @param options
   * @returns {Observable<>}
   */
  get(url: string, options?: RequestOptionsArgs): Observable<any> {
    return super.get(this.urlback + url, this.requestOptions(options));
  }

  /**
   * Performs a request with `post` http method.
   * @param url
   * @param body
   * @param options
   * @returns {Observable<>}
   */
  post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    return super.post(this.urlback + url, body, this.requestOptions(options));
  }

  /**
   * Performs a request with `put` http method.
   * @param url
   * @param body
   * @param options
   * @returns {Observable<>}
   */
  put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    return super.put(this.urlback + url, body, this.requestOptions(options));
  }

  /**
   * Performs a request with `delete` http method.
   * @param url
   * @param options
   * @returns {Observable<>}
   */
  delete(url: string, options?: RequestOptionsArgs): Observable<any> {
    return super.delete(this.urlback + url, this.requestOptions(options));
  }


  /**
   * Request options.
   * @param options
   * @returns {RequestOptionsArgs}
   */
  private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      if(this.onToken()){
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.token}` });
        options = new RequestOptions({ headers: this.headers });
      }
      else{
        options.headers = this.headers;
      }
    }
    return options;
  }

  private onToken() : boolean{
    if(this.token){return true;}else{return false;}
  }

  /**
   * Error handler.
   * @param error
   * @param caught
   * @returns {ErrorObservable}
   */
  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    return Observable.throw(error);
  }

  /**
   * onSubscribeSuccess
   * @param res
   */
  private onSubscribeSuccess(res: Response): void {
  }

  /**
   * onSubscribeError
   * @param error
   */
  private onSubscribeError(error: any): void {
  }

}
