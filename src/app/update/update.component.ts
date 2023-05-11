import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { myProduct } from 'src/model/myProduct';
import { mygroup } from 'src/model/mygroup';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  productId: any;
  product:myProduct={}
  Groups:mygroup[] = [];
  
  constructor(private activatedRoute : ActivatedRoute,private api:ApiService,private route:Router ){

  }
   
  ngOnInit():void{
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data.Id);
      this.productId = data.Id;
      
      this.api.viewProduct(this.productId ).subscribe((data:any)=>{
        console.log(data);
        this.product=data

        this.api.getAllGroups().subscribe((data:any)=>{
          console.log(data);
          this.Groups=data
        })
        
      })

    })

  }
  updateProduct(){
    this.api.updateProduct(this.productId,this.product).subscribe((data:any)=>{
      this.route.navigateByUrl('')
    })
  }

}
