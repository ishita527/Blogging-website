import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from "@angular/common";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faEnvelope, faHouse, faPalette, faFont} from '@fortawesome/free-solid-svg-icons';
import { Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgClass, FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  @Input() fa2  = faEnvelope;
  @Input() fa1 = faHouse;
  @Input() fa3 = faPalette;
  @Input() fa4 = faFont;
  showMenu = false;

  logout(){

  }

  @HostListener('window:click', ['$event'])
  onClick(event: Event) {
    const target = event.target as HTMLElement;
    if(!target.closest('.dropdown-menu') && !target.closest('header div:nth-of-type(2)')){
      this.showMenu = false;
    }  

}
}
