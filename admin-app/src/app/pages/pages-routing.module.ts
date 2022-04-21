import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { MembersComponent } from './members/members.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        data: {
            title: 'Profile'
        }
    },
    {
        path: 'members',
        component: MembersComponent,
        data: {
            title: 'Members',
            headerDisplay: "none"
        }
    },
    
    {
        path: 'setting',
        component: SettingComponent,
        data: {
            title: 'Setting',
            headerDisplay: "none"
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule { }
