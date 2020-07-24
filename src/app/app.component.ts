import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  routes = [
    { linkName:'Movie Catalog', url: 'movie-catalog'},
    { linkName:'Movie Info', url: 'movie-info'},
    { linkName:'Rating Data', url: 'rating-data'}
  ]

  constructor(){
  
  }

  ngOnInit(){
  }

}
