import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { FomUpdateComponent } from './fom-update/fom-update.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path:"accueil",component:AccueilComponent},
  {path:"produitDetail",component:ListeProduitComponent},
  {path:"produitDetail/:id",component:ProduitDetailComponent},
  {path:"ajouter",component:AjouterComponent},
  {path:"FomUpdate/:id",component:FomUpdateComponent},
  {path:"**",component:PageNotFoundComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
