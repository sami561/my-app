import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../modele/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {
  id:number;
  product :Produit;


  constructor(private service:ProduitService,private ar:ActivatedRoute, private router:Router) { }

  ngOnInit() {
   let id:number
   this.ar.paramMap.subscribe((params)=>{
     id=+params.get('id')
     this.service.getProductById(id).subscribe(data=>{
       this.product=data;
     })
   })
  }
  retour(){
    this.router.navigate(['/produitDetail'])
  }

}
