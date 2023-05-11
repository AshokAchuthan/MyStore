import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { myProduct } from 'src/model/myProduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  // productId:any;
  // productName:string='';
  product:myProduct={}
  allGroups:any[]=[];
  constructor(private api:ApiService,private route:Router){

  }
  ngOnInit():void{
    this.api.getAllGroups().subscribe((data:any)=>{
      console.log(data);
      this.allGroups=data
      
    })
  }

  addProduct(){
    this.api.addProduct(this.product).subscribe((data:any)=>{
      this.route.navigateByUrl('')
    })
  }

}
