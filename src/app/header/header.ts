import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from "@angular/common";
@Component({
  selector: 'app-header',
  imports: [RouterLink, NgClass],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  // theme='default';
  // changeTheme() {
  //   this.theme = 'dark'
  // }
  showMenu = false;

  logout(){

  }

  @HostListener('window:click', ['$event'])
  onClick(event: Event) {
    const target = event.target as HTMLElement;
    if(!target.closest('.dropdown-menu') && !target.closest('.author-details')){
      this.showMenu = false;
    }  
  }

}
