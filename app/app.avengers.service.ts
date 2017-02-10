import { Injectable } from '@angular/core';

@Injectable()
export class AvengersService {

  private avengers = [
    {
      name: 'Captain America',
      photo: 'img/Avengers-6.jpg'
    },
    {
      name: 'Iron Man',
      photo: 'img/Avengers-4.jpg'
    },
    {
      name: 'Black Widow',
      photo: 'img/Avengers-3.jpg'
    },
    {
      name: 'Nick Fury',
      photo: 'img/Avengers-7.jpg'
    },
    {
      name: 'Hawkeye',
      photo: 'img/Avengers-1.jpg'
    }
  ];

  constructor() { }

  getAvengers() {
    return this.avengers;
  }
}
