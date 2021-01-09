import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  public resetPasswordData = new BehaviorSubject<any>(null);
  public loggedInUser = new BehaviorSubject<User>(null);

  constructor() { }
}
