import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { MyStoreComponent } from './my-store/my-store.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UpdateComponent } from './update/update.component';
import { ViewStoreComponent } from './view-store/view-store.component';

const routes: Routes = [
  {path:'',redirectTo:'my/admin',pathMatch:'full'},
  {path:'my/admin',component:MyStoreComponent},
  {path:'my/add',component:AddComponent},
  {path:'my/view/:myId',component:ViewStoreComponent},
  {path:'my/update/:Id',component:UpdateComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
