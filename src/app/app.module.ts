import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import {
  MatGridListModule,
  MatListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule
} from '@angular/material';
import { CalendarModule } from 'angular-calendar';
import { CalendarComponent } from './components/calendar/calendar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserspageComponent } from './components/userspage/userspage.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { AuthService } from './providers/auth.service';
// Guards
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    CalendarComponent,
    PageNotFoundComponent,
    UserspageComponent,
    TopbarComponent,
    SchedulerComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    CalendarModule.forRoot(),
    Ng2SmartTableModule,
    MatToolbarModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatInputModule
  ],
  providers: [
    ElectronService,
    AuthService,
    AdminGuard,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
