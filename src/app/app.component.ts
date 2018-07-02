import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service';
import { Component } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  toggled: boolean;
  sidenavWidth = 4 as number;
  schedulerToggle = false as boolean;
  isAuthenticated: Observable<boolean>;

  constructor(
    public electronService: ElectronService,
    private translate: TranslateService,
    private auth: AuthService,
    private router: Router) {

    translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);
    this.toggled = false;
    if (electronService.isElectron()) {
      console.log('Mode electron');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
    } else {
      console.log('Mode web');
    }
  }

  logOut(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  increase(): void {
    this.sidenavWidth = 15;
  }

  decrease(): void {
    this.sidenavWidth = 4;
  }

  toggleSidebar() {
    if (this.toggled) {
      this.decrease();
    } else if (!this.toggled) {
      this.increase();
    }
    this.toggled = !this.toggled;
  }
}
