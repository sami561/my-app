import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../modele/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
 host="http://localhost:8083/Application/"

  constructor(private client:HttpClient) { }
  public  getProducts():Observable<Produit[]>{
    return this.client.get<Produit[]>(this.host+"ListeProduits");
  }
  public getProductById(id):Observable<Produit>{
    return this.client.get<Produit>(this.host+"ListeProduit/"+id);
  }   
  public addProduct(produit:Produit):Observable<void>{
    return this.client.post<void>(this.host+"ListeProduits",produit);
  }
  public  removeProduct(id:number): Observable<void>{
    return this.client.delete<void>(this.host+"ListeProduit/"+id)

  }
  public modifier(id,produit:Produit):Observable<void>
  { 
    return this.client.put<void>(this.host+"ListeProduits/upDate/"+id,produit);
  }
  
}
