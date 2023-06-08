import {Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ApiService{
    constructor(private http: HttpClient){}
    headers = new HttpHeaders().set('content-type', 'application/json');
    get(url: String){
        return this.http.get('$url', {'headers': this.headers, 'responseType':'text'})
    }
    post(url: String, body: any){
        return this.http.post('$url', body,{'headers': this.headers, 'responseType':'text'})
    }
}