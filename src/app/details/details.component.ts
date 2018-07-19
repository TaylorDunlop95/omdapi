import { Component, OnInit } from "@angular/core";
import { OmdbService } from "../omdb.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  private movie;

  constructor(private _omdb: OmdbService) {}

  ngOnInit() {
    this._omdb.movieData.subscribe(data => {
      this.movie = data;
    });
  }
}
