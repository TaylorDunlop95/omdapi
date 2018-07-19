import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

/**
 * The basic url for the omdb api
 */

const baseUrl = "http://www.omdbapi.com/";

/**
 * I know that this is very poor form.
 * I assure you, reader, that I would never,
 * under any other circumstances, do this again.
 */
const apiKey = "ff3c8a9";

@Injectable({
  providedIn: "root"
})
export class OmdbService {
  public movieData: BehaviorSubject<Object>;
  public selectedMovie: BehaviorSubject<Object>;
  public contentType: BehaviorSubject<String>;
  public movieSelected: Boolean;

  constructor(private http: HttpClient) {
    this.movieData = new BehaviorSubject({});
    this.selectedMovie = new BehaviorSubject({});
    this.movieSelected = false;
    this.contentType = new BehaviorSubject("");
  }

  /**
   * Super basic api interaction...
   */

  async searchMoviesByTitleAndYear(title: string, year: string) {
    await this.http
      .get(`${baseUrl}/?apikey=${apiKey}&t=${title}&y=${year}`)
      .subscribe(
        data => {
          this.movieData.next(data);
        },
        error => console.log("Could not load the search data.")
      );
    this.contentType.next("unit");
  }

  async searchMoviesByTitle(title: string) {
    await this.http.get(`${baseUrl}/?apikey=${apiKey}&s=${title}`).subscribe(
      data => {
        this.movieData.next(data);
      },
      error => console.log("Could not load the search data.")
    );
    this.contentType.next("list");
  }

  isMovieSelected() {
    return this.movieSelected;
  }

  setSelectedMovie(movie: object) {
    this.selectedMovie.next(movie);
    this.movieSelected = true;
  }
}
