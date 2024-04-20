import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const baseUrl = 'http://localhost:4200/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

  get(id: any): Observable<User> {
    return this.http.get<User>(`${baseUrl}/${id}`);
  }

  // onFileSelected(event: any): void {
  //   const fileList: FileList = event.target.files;
  //   if (fileList && fileList.length > 0) {
  //     for (let i = 0; i < fileList.length; i++) {
  //       const file = fileList[i];
  //       console.log('Selected file name:', file.name);
  //       // Perform any other operations with the file as needed
  //     }
  //   }
  // }
}
