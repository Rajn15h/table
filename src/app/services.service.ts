import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  
      getData() {
        return [
            {
                id: 1000,
                name: 'Rajnish Mandal',
                country: {
                    name: 'Nepal',
                    code: 'dz'
                },
                company: 'AutoField',
                date: '2015-09-13',
                status: 'unqualified',
                verified: true,
                activity: 17,
                representative: {
                    name: 'Bobby Basak',
                    image: '/assets/images.jpeg'
                },
                balance: 70663
            },
            {
                id: 1001,
                name: 'Jimee',
                country: {
                    name: 'USA',
                    code: 'eg'
                },
                company: 'Google',
                date: '2019-02-09',
                status: 'proposal',
                verified: true,
                activity: 0,
                representative: {
                    name: 'Bobby Basak',
                    image: '/assets/rajnish.jpg'
                },
                balance: 82429
            },
            {
                id: 10022,
                name: 'Sakar Pokhrel',
                country: {
                    name: 'India',
                    code: 'eg'
                },
                company: 'Tesla',
                date: '2019-02-09',
                status: 'proposal',
                verified: true,
                activity: 0,
                representative: {
                    name: 'Elon Musk',
                    image: '/assets/rajnish.jpg'
                },
                balance: 82429
            },   
            
      ];
    }
}
