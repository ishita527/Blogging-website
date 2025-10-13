import { Component } from '@angular/core';
import { blog } from '../../services/blogs';
import { blogs } from './blogs';
import { SlicePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faComment, faThumbsUp, faArrowRight, faX} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-general-homepage',
  imports: [SlicePipe, FontAwesomeModule],
  templateUrl: './general-homepage.html',
  styleUrl: './general-homepage.css'
})
export class GeneralHomepage {
    blogs = blogs;
    facomment = faComment;
    fathumbups = faThumbsUp;
    faArrowRight = faArrowRight;
    faX = faX;



}
