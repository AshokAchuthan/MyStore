import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-store',
  templateUrl: './view-store.component.html',
  styleUrls: ['./view-store.component.css']
})
export class ViewStoreComponent {

  productId:string=''
  product:any;
  groupId:any;
  groupName:any;
  constructor(private activatedRoute :ActivatedRoute,private api:ApiService) {

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      this.productId=data.myId


      this.api.viewProduct(this.productId).subscribe((data:any)=>{
        console.log(data);
        
        this.product=data;
        this.groupId=data.groupID

        this.api.getGroupName(this.groupId).subscribe((data:any)=>{
          this.groupName=data.name
        })

        
        
      })
    })

  }
}
