import { Component } from '@angular/core';
import { ProfileService } from './profile.service';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from './profile';

@Component({
    templateUrl:'./profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
    profiles:UserProfile[];

    constructor(private profileService:ProfileService,private route:ActivatedRoute){}

    ngOnInit(){
        this.profileService.getprofile().subscribe(data=>{
            console.log(data);
            this.profiles=data;
        },err=>{
            console.log(err);
        })
}}