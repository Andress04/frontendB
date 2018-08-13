import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing,appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import { DocumentListCompo} from './components/document-list.component';
import { HomeComponent} from './components/homee.component';
import { DocumentAddCompo} from './components/document-add.component';
@NgModule({
  declarations: [
    AppComponent,
    DocumentListCompo,
    HomeComponent,
    DocumentAddCompo
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
