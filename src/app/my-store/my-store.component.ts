import { Component } from '@angular/core';
import { myProduct } from 'src/model/myProduct';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-my-store',
  templateUrl: './my-store.component.html',
  styleUrls: ['./my-store.component.css']
})
export class MyStoreComponent {
  LoginDate:any;
  allProducts:myProduct[]=[]
  searchKey:string='';

  constructor (private api:ApiService){
    this. LoginDate= new Date()
   
  }
  ngOnInit():void{
    this.getAllProduct()
  }
  getAllProduct(){
    this.api.getAllProduct().subscribe((data:any)=>{
      console.log(data);
      this.allProducts=data
      
    })

  }

  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value;
   }

   deleteProduct(productId:any){
    this.api.deleteProduct(productId).subscribe((data:any)=>{
      alert("product deleted")
      this.getAllProduct()
    })
   }
}
