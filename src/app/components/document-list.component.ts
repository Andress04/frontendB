import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { DocumentService} from '../servicios/document';
import { GLOBAL} from '../servicios/global';
import {Document} from '../modelos/document';
@Component({
	selector:'document-list',
	templateUrl:'../views/document-list.html',
	providers:[DocumentService]
})

export class DocumentListCompo implements OnInit{
	public titulo: string;
	public documents: Document[];
	public url: string;

	constructor(
		private _route:ActivatedRoute,
		private _router:Router,
		private _documentService:DocumentService,

		){
		this.titulo='Documentos';
		this.url=GLOBAL.url;

	}
	ngOnInit(){
		console.log('document-list.component.ts cargado');

	}
}