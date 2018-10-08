import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { SelectingComponent } from './selecting/selecting.component';
//import { GetrestaurantsService } from './getrestaurants.service';
import { HttpClientModule } from '@angular/common/http';
import { DisplaycollectionsComponent } from './displaycollections/displaycollections.component';
import { HomeComponent } from './home/home.component';
import { AddtofavouritesService } from './addtofavourites.service';
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    SelectingComponent,
    DisplaycollectionsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    HttpClientModule
  ],
  providers: [AddtofavouritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
