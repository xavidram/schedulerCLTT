import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserspageComponent } from './components/userspage/userspage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    }, {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    }, {
        path: 'calendar',
        component: CalendarComponent,
        canActivate: [AuthGuard]
    }, {
        path: 'users',
        component: UserspageComponent,
        canActivate: [AuthGuard]
    }, {
        path: 'scheduler',
        component: SchedulerComponent,
        canActivate: [AuthGuard]
    }, {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
