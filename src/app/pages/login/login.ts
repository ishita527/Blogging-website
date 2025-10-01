import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Api} from '../../services/api';
import { CommonModule } from '@angular/common'; 

@Component({
  imports: [FormsModule, CommonModule],
  templateUrl: 'login.html',
  styleUrl: 'login.css'
})
export class Login {
  username = '';
  password = '';
  error = '';

  constructor(private api: Api, private router: Router) {}

  // async login() {
  //   try {
  //     const res = await this.api.login(this.username, this.password);
  //     console.log(res);
  //     if (res.success) {
  //       this.router.navigate(['/home']);
  //     } else {
  //       this.error = "Invalid credentials";
  //     }
  //   } catch {
  //     this.error = "Login failed";
  //   }
  // }

  login(){
    
  }
}
