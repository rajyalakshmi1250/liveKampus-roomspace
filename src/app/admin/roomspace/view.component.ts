import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRoom } from 'src/app/user/room-space/user-room';
import { RoomService } from './room.service';
import { Room } from './room';
import { AdminComponent } from '../admin.component';

 
@Component({
    selector:"view-roomspace",
    templateUrl:"./view.component.html",
    styleUrls: ['./view.component.css']
})
 export class ViewRoomSpaceComponent implements OnInit{
     
     adminroom:Room;
  

    constructor( private roomService:RoomService,
        private routes: ActivatedRoute,
        private route:Router) { }


     
    ngOnInit():void{
        this.routes.paramMap.subscribe((map)=>{
            let roomName=map.get("roomName");
            this.roomService.findByName(roomName).subscribe((data)=>{
                this.adminroom=data;
                console.log(data);

            });
        });
    }
   
    addNewRoom(){
        console.log("success");
        this.roomService.addNewRoom(this.adminroom).subscribe((data)=>{
            console.log(this.adminroom);
            console.log("success");
            if(data !=null) {
                alert("room added successfully");
                this.route.navigate["/admin/rooms"];
                var element = document.getElementById("addRoom");
                element.classList.remove("show");
                document.querySelector('.modal-backdrop').classList.remove("fade","modal-backdrop");
            }
        });
    }

 }