import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { DocumentService} from '../servicios/document';
import { GLOBAL} from '../servicios/global';
import {Document} from '../modelos/document';
@Component({
	selector:'document-add',
	templateUrl:'../views/document-add.html',
	providers:[DocumentService]
})

export class DocumentAddCompo implements OnInit{
	public titulo: string;
	public document: Document;
	public url: string;

	constructor(
		private _route:ActivatedRoute,
		private _router:Router,
		private _documentService:DocumentService,

		){
		this.titulo="Crear nuevo documento";
		this.url=GLOBAL.url;
		this.document = new Document('','','','','','','','','');
	}
	ngOnInit(){
		console.log('document-add.component.ts cargado');

	}
	onSubmit(){
		console.log(this.document);
		this._documentService.addDocument(this.document).subscribe(

			Response =>{
				if(!Response.document){
					alert('Error en el servidor');
				}else{
				this.document = Response.document;
				this._router.navigate(['editar-document',Response.document._id]);

			}},
			error =>{
				var errorMessage = <any>error;
				if(errorMessage !=null){
					var body = JSON.parse(error._body);
					console.log(error);
				}
			}

			);
	}
}
