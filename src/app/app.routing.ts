import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//import document
import {DocumentListCompo} from './components/document-list.component';
import {HomeComponent} from './components/homee.component';
import { DocumentAddCompo} from './components/document-add.component';


const appRoutes: Routes = [

	{path:'',component: HomeComponent},
	{path:'documentos/:page',component: DocumentListCompo},
	{path :'crear-documento', component:DocumentAddCompo},
	{ path: '**', component: HomeComponent}

];	

export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);