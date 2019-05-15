import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from './room';
import { RoomService } from './room.service';
import { query } from '@angular/core/src/render3';




@Component({
    templateUrl:"./roomspace.component.html",
    styleUrls:["./roomspace.component.css"],
    selector:"space"
})

export class RoomSpaceComponent  {

//     room:Room[];
//     constructor( private roomService:RoomService,
//         private route: ActivatedRoute) { }
//     ngOnInit():void{
//         //we have to read the route parameters
//         this.route.paramMap.subscribe((map)=>{
//             let roomId=Number(map.get("roomId")); 
//             console.log(roomId); 
//             this.roomService.findAll().subscribe((data)=>{
//                 this.room=data;

//             })  
//     })
// }










adminroom:Room;
//roomName:String;
adminrooms:Room[];

constructor( private roomService:RoomService,
   private routes: ActivatedRoute,
   private route:Router) { }
ngOnInit():void{
   this.routes.paramMap.subscribe((map)=>{
       this.roomService.findAll().subscribe((data)=>{
           this.adminrooms=data;
           console.log(data);

       });
   });
}

deleteRoom(adminroom:Room){
    this.roomService.deleteByName(adminroom.roomName).subscribe((data)=>{
        this.route.navigate['/admin/roomspace'];
        location.reload(true);
    })
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