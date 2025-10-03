import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../../header/header';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Api } from '../../services/api';
import '../../services/blogs';
import { blog } from '../../services/blogs';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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

  constructor() {}

  ngOnInit() {
    this.api.getBlogs().subscribe({
      next: (data) => {
        this.blogs = data;
        this.blogs.forEach((blog) => {
          blog.updatedAt = new Date(blog.updatedAt).toLocaleDateString();
        });
        console.log(this.blogs);
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.log(error.message);
      },
    });
  }

  viewBlog(event: MouseEvent, id: number, title: string) {
    console.log(event)
    if (event.target) {
      const target = event.target as HTMLElement;
      if (!target.closest('.action-icons') || target.closest('#pen')) {
        this.router.navigate(['/create-blog', id, title]);
      }
    }
  }

  deleteBlog(id: number) {
    this.api.deleteBlog(id).subscribe({
      next: (res) => {
        console.log(res);
        this.ngOnInit();
      },
      error: (error) => console.log(`${error.status}: ${error.statusText}`),
    });
  }
}
