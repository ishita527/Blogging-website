import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from '../../services/api';
import { Header } from '../../header/header';
import { blog } from '../../services/blogs';
@Component({
  selector: 'app-create-blog',
  imports: [FormsModule, Header],
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
      error: (error) => (this.errorStatus = 0),
    });
  }
  submitBlog() {
    if (this.title && this.content) {
      if(!this.blog_id){
        this.api.addBlog(this.title, this.content).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/home']);
      });
      }

      else{
        this.api.updateBlogById(this.blog_id, this.title, this.content).subscribe(res => {
          console.log(res);
          
        })
      }
      
    }
  }
}
