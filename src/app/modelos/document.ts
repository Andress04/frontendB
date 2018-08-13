export class Document{
	public _id: string
	public descripcion: string
	public tipo: string
	public ruta: string
	public estado: string
	public autor:string
	public editor: string
	public revision: string
	public file: string
constructor(_id: string,
	 descripcion: string,
	 tipo: string,
	 ruta: string,
	 estado: string,
	 autor:string,
	 editor: string,
	 revision: string,
	 file: string){
	this._id=_id
	this.descripcion=descripcion
	 this.tipo= tipo
	 this.ruta= ruta
	 this.estado= estado
	 this.autor=autor
	 this.editor=editor
	 this.revision= revision
	 this.file= file
}
}