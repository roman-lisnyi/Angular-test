import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = {
    name: {
      firstname: 'Jon',
      lastname: 'Smith',
    },
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJdpVz_6GrMuDKYwWm6Aah2NJ8qD4JU4B8IVB6I9ohmvBGjwtf',
    id: 1
  };

  constructor() {
  }

  lignIn() {}

  logOut() {}
}
