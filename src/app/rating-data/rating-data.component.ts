import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'rating-data',
  templateUrl: './rating-data.component.html',
  styleUrls: ['./rating-data.component.css']
})
export class RatingDataComponent implements OnInit {

  title : String = "Movie Rating";
  movieId : String = "";
  response : any;

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }


  search() {
      const url = 'http://localhost:8761/api/ratings-data-service/ratingsdata/'+ this.movieId;
      this.http.get(url)
    .subscribe((response) => {
      this.response = response;
      console.log(response);
    }
    )
  }

}
