import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';
const initialState = [
  {
    fullName: '',
    email: '',
    phone: '',
    address: '',
  },
];

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public entities$: BehaviorSubject<User[]> = new BehaviorSubject(initialState);

  public loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private baseURL = environment.baseURL;

  private userList: User[] = [];

  constructor(private httpClient: HttpClient) {}
  public getAll() {
    this.loading$.next(true);
    this.httpClient.get<User[]>(`${this.baseURL}/users`).subscribe((users) => {
      this.userList = users;
      this.entities$.next(this.userList);
      this.loading$.next(false);
    });
  }
  public getUserById(id: string) {
    this.httpClient.get(`${this.baseURL}/users/${id}`).subscribe((user) => {
      return user;
    });
  }
  public add(payload: User) {
    this.loading$.next(true);
    this.httpClient
      .post<User>(`${this.baseURL}/users`, payload)
      .subscribe((user) => {
        this.userList = [user, ...this.userList];
        this.entities$.next(this.userList);
        this.loading$.next(false);
      });
  }
  public delete(id: string) {
    this.loading$.next(true);
    this.httpClient
      .delete<User>(`${this.baseURL}/users/${id}`)
      .subscribe((deletedUser) => {
        this.userList = this.userList.filter(({ id }) => deletedUser.id !== id);
        this.entities$.next(this.userList);
        this.loading$.next(false);
      });
  }
}
