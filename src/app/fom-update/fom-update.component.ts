import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../modele/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-fom-update',
  templateUrl: './fom-update.component.html',
  styleUrls: ['./fom-update.component.css']
})
export class FomUpdateComponent implements OnInit {
  id;
  produit:Produit;

  constructor(private ar:ActivatedRoute,private router:Router,private service:ProduitService) { }

  ngOnInit() {
    this.id=+this.ar.snapshot.paramMap.get('id');
    console.log(this.id)
    this.service.getProductById(this.id).subscribe(
      data=>{ this.produit=data
     console.log(this.produit);
      })
  }
  ModifierProd()
  {

 this.service.modifier(this.id,this.produit).subscribe(
   ()=>
   this.router.navigate(['/produitDetail']))

 
console.log("ghhhh");
  };

}
