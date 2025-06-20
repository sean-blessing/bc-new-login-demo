import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../model/menu-item';
import { SystemService } from '../../service/system-service';
import { User } from '../../model/user';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit {
  title: string = 'BMDB';
  //menuItems: MenuItem[] = [];
  user: User | null = null;

  constructor(private sysSvc: SystemService) {}

  ngOnInit(): void {
    this.sysSvc.user$.subscribe((u) => (this.user = u));
    // initialize menuItems
    // this.menuItems.push(new MenuItem('Movie', '/movie-list', 'Movie List'));
    // if (this.user?.admin) {
    //   this.menuItems.push(new MenuItem('Actor', '/actor-list', 'Actor List'));
    // }
    // this.menuItems.push(new MenuItem('Login', '/user-login', 'User Login'));
    // this.menuItems = [
    //   new MenuItem('Movie', '/movie-list', 'Movie List'),
    //   new MenuItem('Actor', '/actor-list', 'Actor List'),
    //   new MenuItem('Credit', '/credit-list', 'Credit List'),
    //   new MenuItem('Login', '/user-login', 'User Login'),
    // ];
  }
}
