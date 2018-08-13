import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { DocumentService} from '../servicios/document';
import { GLOBAL} from '../servicios/global';
import {Document} from '../modelos/document';
@Component({
	selector:'home',
	templateUrl:'../views/home.html',
	
})

export class HomeComponent implements OnInit{
	public titulo: string;
	constructor(
		private _route:ActivatedRoute,
		private _router:Router,
		){
		this.titulo='Sin servicio';
	}
	ngOnInit(){
		console.log('home.component.ts cargado');

	}
}