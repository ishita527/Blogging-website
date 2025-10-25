import { Component, signal } from '@angular/core';
import { blogs } from './blogs';
import { SlicePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faComment, faThumbsUp, faArrowRight, faX, faSearch} from '@fortawesome/free-solid-svg-icons';
import { Header } from "../../header/header";
@Component({
  selector: 'app-general-homepage',
  imports: [SlicePipe, FontAwesomeModule, Header],
  templateUrl: './general-homepage.html',
  styleUrl: './general-homepage.css'
})
export class GeneralHomepage {
    blogs = blogs;
    facomment = faComment;
    fathumbups = faThumbsUp;
    faArrowRight = faArrowRight;
    faX = faX;
    faSearch = faSearch;

    userName = 'avinashmth';

    changeUsername(){
      console.log('hi')
      this.userName = 'ishi';
    }




}
