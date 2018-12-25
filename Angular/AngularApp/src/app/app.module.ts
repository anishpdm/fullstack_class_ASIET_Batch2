import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ApiserviceService } from './apiservice.service';
import { HttpModule } from '@angular/http';


const appRoutes:Routes=[
{path:'',component:AppComponent},
{path:'about',component:AboutComponent},
{path:'users',component:UsersListComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DisplayComponent,
    AboutComponent,
    MainComponent,
    UsersListComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ApiserviceService],
  bootstrap: [NavbarComponent,MainComponent]
})
export class AppModule { }
