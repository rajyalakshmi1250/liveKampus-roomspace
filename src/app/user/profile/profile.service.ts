import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from './profile';



@Injectable()
export class ProfileService{


    baseUrl = "assets/profile.json";

    constructor(private httpclient:HttpClient){}

    getprofile():Observable<UserProfile[]>{
        return this.httpclient.get<UserProfile[]>(this.baseUrl);
    }

    //  findProfileById(profileId: number): Observable<UserProfile> {        
    //     return this.httpclient.get<UserProfile>(this.baseUrl + "profile/" + profileId);

    // }



    // profiles=[
    //     {
    //         "name":"mehvash momin",
    //         "profile": "assets/images/user-avatar2.jpg",
    //         "postprofile":"assets/images/user.jpg",
    //         "timelinepost":"assets/images/user-post.jpg",
    //         "caption":"World's most beautiful car in Curabitur test drive booking the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
    //         "tag":"#test drive booking !",
    //         "timeline":"assets/images/user.jpg",
    //         "friend1":"assets/images/friend-avatar9.jpg",
    //         "friend1name":"Abbas Pathan",
    //         "friend2name":"kapil pawar",
    //         "userId":"xyz",
    //         "city":"Mumbai",
    //         "state":"Maharashtra"
    //     } 
    // ]

    
}