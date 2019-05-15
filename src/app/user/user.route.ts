import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './Friends/friends.component';
import { UserEventlistComponent } from './event/user-event-list.component';
import { NotificationComponent } from './notification/notification.component';
import { ChatComponent } from './chat/chat.component';
import { UserRoomSpaceComponent } from './room-space/user-roomspace.component';



export const userRoutes: Routes = [
    {path: 'user', component: UserComponent,
    children: [
        {path:'', component: HomeComponent},
        {path:'profile', component: ProfileComponent},
        {path:'friends', component: FriendsComponent},
        {path:'events', component: UserEventlistComponent},
        {path:'roomspace', component: UserRoomSpaceComponent},
        {path:'notifications', component: NotificationComponent},
        {path:'chat', component: ChatComponent}
        


    ]
}
];

