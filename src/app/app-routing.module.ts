import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserspageComponent } from './components/userspage/userspage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, {
        path: 'calendar',
        component: CalendarComponent
    }, {
        path: 'users',
        component: UserspageComponent
    }, {
        path: '**',
        component: PageNotFoundComponent
    }, 
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
