import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyStoreComponent } from './my-store/my-store.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ViewStoreComponent } from './view-store/view-store.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyStoreComponent,
    NavBarComponent,
    ViewStoreComponent,
    UpdateComponent,
    AddComponent,
    PagenotfoundComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
