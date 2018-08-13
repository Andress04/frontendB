import { Component,OnInit } from '@angular/core';
import { DocumentService} from './servicios/document';
import { Document }from './modelos/document';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[DocumentService]
 
})
export class AppComponent implements OnInit {
  public title = 'Bonafide!';
  public document:Document;
  
 	
 	constructor(
 		private _documentService:DocumentService){
 		this.document= new Document ('','','','','','','','','');

 	}
 	ngOnInit(){
 	var texto=	this._documentService.singup();
 	console.log(texto);
}
 	public onSubmit(){
 		console.log(this.document);
 	}

}
