import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

menu: string[];

  constructor(private routerService:Router){
    this.menu = ['dashboard','activity','ebooks','settings','messenger','files'];
  }

  navTo(url:string) {
    this.routerService.navigate(['/' + url]);
  }
}
