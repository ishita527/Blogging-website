import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from '../../services/api';
import { NgClass } from '@angular/common';
import { Header } from "../../header/header";
import { parse } from 'path';

@Component({
  selector: 'app-create-blog',
  imports: [FormsModule, Header],
  templateUrl: './create-blog.html',
  styleUrl: './create-blog.css'
})
export class CreateBlog {
  title = '';
  content = '';
  blog_id: number = 0;
  // theme='default'

  constructor(private api: Api, private router: Router, private route: ActivatedRoute) {}
  

  ngOnInit() {
    this.route.params.subscribe(params => {
    if(params['id']) {
      this.blog_id = params['id'];
      this.viewBlog();
    }
  });
  }

  async viewBlog() {
    const blog = await this.api.getBlogById(this.blog_id)
    this.title = blog.title;
    this.content = blog.content;
  }
  async submitBlog() {
    if (this.title && this.content) {
      await this.api.addBlog(this.title, this.content);
      this.router.navigate(['/home']);
    }
  }

  // changeTheme() {
  //   this.theme = 'dark'
  // }
}
