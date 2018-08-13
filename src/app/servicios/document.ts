import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {map } from 'rxjs/operators';
import {Http,Response } from '@angular/http';
import {Observable } from 'rxjs/Observable';
import {GLOBAL} from './global';
@Injectable()
export class DocumentService{
	public url: string;

singup(){
		return "Hellooooo desde el servicio";
	}
	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}
	addDocument(document:Document){
		let params = JSON.stringify(document);
		
		return this._http.post(this.url+'document',params)
		.map(res => res.json());
}	
	
	
	
}


