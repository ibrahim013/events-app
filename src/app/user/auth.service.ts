import { Injectable } from '@angular/core';
import { IUser } from './user.interface'
@Injectable()

export class AuthService{
currentUser: IUser
loginUser(userName: string, password: string){
  this.currentUser = {
    id: 1,
    firstName:'Ibrahim',
    lastName: 'A',
    userName: 'ibrahim'
  }
}
  isAuthenticated(){
    return !!this.currentUser;
  }
}
