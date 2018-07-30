import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './routes'
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component'
import { FormsModule} from '@angular/forms';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations:[
    ProfileComponent,
    LoginComponent
  ],
  providers:[]
})
export class UserModule{}
