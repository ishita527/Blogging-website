import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from "@angular/common";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgClass, NgOptimizedImage],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  showMenu = false;

  logout(){

  }

  @HostListener('window:click', ['$event'])
  onClick(event: Event) {
    const target = event.target as HTMLElement;
    if(!target.closest('.dropdown-menu') && !target.closest('header div:nth-of-type(2)')){
      this.showMenu = false;
    }  
    console.log(target);

}
}
