import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'Saw this awsome tree  today.'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountain lover',
      content: 'Here is a picture of a snowy mountain.'
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking2222',
      content: 'I did some biking today.'
    },
     {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountain lover',
      content: 'Here is a picture of a snowy mountain.'
    }

  ]

}
