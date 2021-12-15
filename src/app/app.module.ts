import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AjouterComponent } from './ajouter/ajouter.component';
import { UpdateComponent } from './update/update.component';
import { FomUpdateComponent } from './fom-update/fom-update.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeProduitComponent,
    AccueilComponent,
    ProduitDetailComponent,
    PageNotFoundComponent,
    AjouterComponent,
    UpdateComponent,
    FomUpdateComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
