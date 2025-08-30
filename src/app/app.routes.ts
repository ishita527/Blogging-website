import { Routes } from '@angular/router';
import { Login} from './pages/login/login';
import { Home} from './pages/home/home';
import { CreateBlog } from './pages/create-blog/create-blog';

export const routes: Routes = [
  { path: '', component: Login, pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'create-blog', component: CreateBlog },
];
