import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { myProduct } from 'src/model/myProduct';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseUrl:string='http://localhost:3000/Product'
  getAllProduct():Observable<myProduct>{
    
    return this.http.get(this.baseUrl)
  }
  viewProduct(productId:any){
    return this.http.get(`${this.baseUrl}/${productId}`)
  }

  getGroupName(groupId:any){
    return this.http.get('http://localhost:3000/group/'+groupId)
  }

  getAllGroups(){
    return this.http.get('http://localhost:3000/group')
  }

  addProduct(productBody:any){
    return this.http.post(this.baseUrl,productBody)
  }

  deleteProduct(productId:any){
    return this.http.delete(`${this.baseUrl}/${productId}`)
  }

  updateProduct(productId:any,productBody:any){
    return this.http.put(`${this.baseUrl}/${productId}`,productBody)
  }
}

