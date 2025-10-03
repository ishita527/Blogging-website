import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from '../../services/api';
import { Header } from '../../header/header';
import { blog } from '../../services/blogs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-create-blog',
  imports: [FormsModule, Header, FontAwesomeModule],
  templateUrl: './create-blog.html',
  styleUrl: './create-blog.css',
})
export class CreateBlog {
  title = '';
  content = '';
  blog_id = 0;
  @Input() date = new Date().toLocaleDateString();
  disabled = false;
  errorStatus = 1;
  errorMessage = 'Network error - Try reloading or check your internet connection!';
  successMessage = '';
  submitted = false;
  fatriangle = faTriangleExclamation;
  // theme='default'

  constructor(private api: Api, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.blog_id = params['id'];
        this.viewBlog();
      }
    });

    console.log(this.date);
  }

  viewBlog() {
    this.api.getBlogById(this.blog_id).subscribe({
      next: (data: any) => {
        const blog = data;
        this.title = data.title;
        this.content = data.content;
        this.date = new Date(data.updatedAt).toLocaleDateString();
      },
      error: (error) => {
        console.log(error)
        this.errorStatus = 0;
        this.errorMessage = error.message;
      },
    });
  }
  submitBlog() {
    if (this.title && this.content) {
      if (!this.blog_id) {
        this.api.addBlog(this.title, this.content).subscribe({
          next: (res) => {
            console.log(res);
            this.router.navigate(['/home']);
          },
          error: (error) => {
            this.errorStatus = 0;
            this.errorMessage = error.message;
          },
        });
      } else {
        this.api.updateBlogById(this.blog_id, this.title, this.content).subscribe({
          next: (res) => {
            this.router.navigate(['/home']);
            console.log(res);
          },
          error: (error) => {
            this.errorStatus = 0;
            this.errorMessage = error.message;
          },
        });
      }
    }
  }
}
