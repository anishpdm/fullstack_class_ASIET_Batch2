import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

fetchDatas=[];
  constructor(private apiService:ApiserviceService) {
this.onGetData();

   }

   onGetData(){

this.apiService.getServerData().subscribe(
  (newData:any[])=>{
    console.log(newData);
    this.fetchDatas=newData
  },
  (error)=>console.log(error)
);



   }

  ngOnInit() {
  }

}
