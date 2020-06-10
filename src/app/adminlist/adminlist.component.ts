import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AdminformComponent} from "../adminform/adminform.component";
import {AdminmodalformComponent} from "../adminmodalform/adminmodalform.component";

export interface adminListData {
  name: string;
  position: number;
  username: string;
  address: string;
}


const DATA:adminListData[] =[
  {position: 1, name: 'Admin1', username: 'user1@gmail.com', address: 'H'},
  {position: 2, name: 'Admin2', username: 'user1@gmail.com', address: 'H'},
  {position: 3, name: 'Admin3', username: 'user1@gmail.com', address: 'H'},
  {position: 4, name: 'Admin4', username: 'user1@gmail.com', address: 'H'},
  {position: 5, name: 'Admin5', username: 'user1@gmail.com', address: 'H'},
  {position: 6, name: 'Admin6', username: 'user1@gmail.com', address: 'H'},
  {position: 7, name: 'Admin7', username: 'user1@gmail.com', address: 'H'},
  {position: 8, name: 'Admin8', username: 'user1@gmail.com', address: 'H'},
  {position: 9, name: 'Admin9', username: 'user1@gmail.com', address: 'H'},
  {position: 10, name: 'Admin10', username: 'user1@gmail.com', address: 'H'},
  {position: 11, name: 'Admin11', username: 'user1@gmail.com', address: 'H'},
  {position: 12, name: 'Admin1', username: 'user1@gmail.com', address: 'H'},
  {position: 13, name: 'Admin1', username: 'user1@gmail.com', address: 'H'},

];



@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})








export class AdminlistComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'username', 'address', 'actions' ];
  dataSource = DATA;
  constructor( public dialog:MatDialog) { }

  openDialog(){
    const dialogRef= this.dialog.open(AdminmodalformComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //  toogle views
  public show:boolean = true;
  public hide:boolean = false;
  public buttonName:any = 'ListView';

  toggle(){
    this.show = !this.show;
    this.hide = !this.hide;
    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)
      this.buttonName = "GridView";
    else
      this.buttonName = "ListView";


  };


  applyFilter( filterValue:string){
   // this.dataSource = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
  }

}
