import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../../header/header';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Api } from '../../services/api';
import '../../services/blogs';
import { blog } from '../../services/blogs';

@Component({
  selector: 'app-home',
  imports: [FormsModule, SlicePipe, Header, RouterLink],
  templateUrl: 'home.html',
  styleUrl: 'home.css',
})
export class Home implements OnInit {
  blogs: blog[] = [];
  private router = inject(Router);
  private api = inject(Api);
  date: Date = new Date('2025-10-01T07:50:47.443967');
  errorMessage = 'No blogs available';

  constructor() {}

  ngOnInit() {
    this.api.getBlogs().subscribe({
      next: (data) => {
        this.blogs = data;
        this.blogs.forEach((blog) => {
          blog.updatedAt = new Date(blog.updatedAt).toLocaleDateString();
        });
        console.log(this.blogs)
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.log(error.message)
      },
    });
  }

  viewBlog(id: number) {
    console.log('blog viewed!')
    this.router.navigate(['/create-blog', id]);
    
  }

  deleteBlog(id: number){
    this.api.deleteBlog(id).subscribe(res =>{
      console.log(res);
      this.ngOnInit();
    })

  }
}
