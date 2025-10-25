import { Component, HostListener, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../../header/header';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Api } from '../../services/api';
import '../../services/blogs';
import { blog } from '../../services/blogs';
import { faPen, faTrash, faSpinner} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-home',
  imports: [FormsModule, SlicePipe, Header, RouterLink, FontAwesomeModule],
  templateUrl: 'home.html',
  styleUrl: 'home.css',
})
export class Home implements OnInit {
  blogs: blog[] = [];
  private router = inject(Router);
  private api = inject(Api);
  date: Date = new Date('2025-10-01T07:50:47.443967');
  errorMessage = 'No blogs available';
  fapen = faPen;
  fatrash = faTrash;
  faspinner = faSpinner;
  spinnerStart = false;
  constructor() {}

  isMenuOpen = signal(false);

  ngOnInit() {
    this.spinnerStart = true;
    this.api.getBlogs().subscribe({
      next: (data) => {
        this.spinnerStart = false;
        this.blogs = data;
        this.blogs.forEach((blog) => {
          blog.updatedAt = new Date(blog.updatedAt).toLocaleDateString();
        });
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.spinnerStart = false;
      },
    });
  }

  viewBlog(event: MouseEvent, id: number, title: string) {
    if (event.target) {
      const target = event.target as HTMLElement;
      if (!target.closest('.action-icons') || target.closest('#pen')) {
        this.router.navigate(['/create-blog', id, title]);
      }
    }
  }

  deleteBlog(id: number) {
    this.spinnerStart = true;
    this.api.deleteBlog(id).subscribe({
      next: (res) => {
        this.spinnerStart = false;
        this.ngOnInit();
      },
      error: (error) => {
        console.log(`${error.status}: ${error.statusText}`)
        this.spinnerStart = false;
        
      },
    });
  }

  toggleMenu(){
    this.isMenuOpen.update((val) => !val);
  }
}
