import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(): Observable<any> {
    return this.http.get('http://localhost:4200/assets/data.json');
  }
  register(user: User) {
      return this.http.post('http://localhost:4200/assets/data.json', user);
  }

  delete(id: number) {
      return this.http.delete(`'http://localhost:4200/assets/data.json'/${id}`);
  }
}
