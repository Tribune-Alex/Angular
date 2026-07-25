import { Component } from '@angular/core';
import { Div } from '../div/div';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [Div,CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

    characters = [
    {
      name: 'John Wick',
      image: '/img/john.webp',
      info: 'Legendary assassin known as Baba Yaga.'
    },
    {
      name: 'Winston',
      image: '/img/winston.jpeg',
      info: 'Manager of the Continental Hotel.'
    },
    {
      name: 'Charon',
      image: '/img/charon.jpeg',
      info: 'Concierge of the Continental.'
    },
    {
      name: 'Bowery King',
      image: '/img/king.jpeg',
      info: 'Leader of the Bowery.'
    },
    {
      name: 'Marcus',
      image: '/img/Marcus_Profile.webp',
      info: 'Old friend of John.'
    }
  ];


  antagonists=[
    {
      name:'Viggo Tarasov',
      image:'/img/ViggoTarasov.webp',
      info:'Viggo Tarasov (Russian: Вигго Тарасов) was a notorious Russian crime boss from the Tarasov crime family, the former head of the Tarasov Mob in New York City.'
    },
    {
      name:'Caine',
      image:'/img/caine.jpeg',
      info:'Caine is a blind yet extremely lethal and extraordinarily skilled assassin and master martial artist who was coerced by Vincent Bisset de Gramont to find and kill his old friend John Wick.'
    },
    {
      name:'The Marquis de Gramont',
      image:'/img/TheMarquisappearance.webp',
      info:'Aristocrat Senior Member of the High Table'
    },
    {
      name:"Santino D'Antonio",
      image:'/img/Santino.webp',
      info:'Powerful Italian crime lord and boss of the D’Antonio crime family, a large and powerful Camorra clan'
    }
  ]

  selectedCharacter: any = null;

  open(character: any) {
    this.selectedCharacter = character;
  }

  close() {
    this.selectedCharacter = null;
  }

}
