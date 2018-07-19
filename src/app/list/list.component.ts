import { Component, OnInit } from "@angular/core";
import { OmdbService } from "../omdb.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  private searchData;
  private selectedMovie;

  constructor(private _omdb: OmdbService) {}

  ngOnInit() {
    this._omdb.selectedMovie.subscribe(data => {
      this.selectedMovie = data;
    });
    this._omdb.movieData.subscribe(data => {
      this.searchData = data;
    });
  }
}
