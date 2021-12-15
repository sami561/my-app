import { Component, OnInit } from '@angular/core';

import { bindCallback } from 'rxjs';
import { Produit } from '../modele/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {
  products :Produit[];
  productsF:Produit[];
  nomb="masquer"
  affiche()
  {
    if(this.nomb=="masquer")
    this.nomb="affiche"
    else
    this.nomb="masquer"
  }
    constructor( private service:ProduitService) { 
    
  }
  getcolor(a:number){
    if(a==0)
    return "red";

      return "black"; 
  

      
  }
  getAllProducts(){
    this.service.getProducts().subscribe(data=>{this.products=data
      this.productsF=this.products})
        
  }
supprimer(id){
  this.service.removeProduct(id).subscribe(()=>this.getAllProducts())
}
  ngOnInit() {
  this.getAllProducts()
  }
  //productsF:Produit[]
  set abcd(s:string){
    this.productsF=this.filtrer(s);
  }
  filtrer(ch:string){
    return this.products.filter(x=>x.nom.indexOf(ch)!=-1);
  }


}
