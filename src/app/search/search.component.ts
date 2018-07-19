import { Component, OnInit } from "@angular/core";
import { OmdbService } from "../omdb.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  constructor(private _omdb: OmdbService) {}

  private title: string = "";
  private year: string = "";
  private searchAllTime: Boolean;

  ngOnInit() {}

  search() {
    this.searchAllTime
      ? this._omdb.searchMoviesByTitle(this.title)
      : this._omdb.searchMoviesByTitleAndYear(this.title, this.year);
  }
}
