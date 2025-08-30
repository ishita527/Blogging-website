import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Api } from '../../services/api';
import { NgClass } from '@angular/common';
import { Header } from "../../header/header";

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [FormsModule, Header],
  templateUrl: './create-blog.html',
  styleUrl: './create-blog.css'
})
export class CreateBlog {
  title = '';
  content = '';
  // theme='default'

  constructor(private api: Api, private router: Router) {}

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
