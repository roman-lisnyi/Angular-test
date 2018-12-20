import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  dataUsers = [
    {
      birthdate: '17-10-1989',
      name: {
        firstname: 'Aaron',
        lastname: 'Hank',
      },
      description: 'Some description about this person',
      male: true
    },
    {
      birthdate: '11-01-1993',
      name: {
        firstname: 'Henry',
        lastname: 'Matthew',
      },
      description: 'Some description about this person',
      male: true
    },
    {
      birthdate: '18-12-1987',
      name: {
        firstname: 'Marie',
        lastname: 'Madonna',
      },
      description: 'Some description about this person',
      male: true
    },
    {
      birthdate: '05-05-1990',
      name: {
        firstname: 'Helena',
        lastname: 'André'
      },
      description: 'Some description about this person',
      male: false
    },
  ];

  constructor() {
  }

  getStatistic() {

  }
}
