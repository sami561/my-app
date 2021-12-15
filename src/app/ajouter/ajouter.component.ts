import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  constructor(private service:ProduitService,private router:Router) { }
  

  ngOnInit() {
  }
  AjouterProd(f:NgForm)
  {
this.service.addProduct(f.value).subscribe(()=>this.router.navigate(["/produitDetail"]));
  }

}
