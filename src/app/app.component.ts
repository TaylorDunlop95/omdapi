import { Component } from "@angular/core";
import { OmdbService } from "./omdb.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  contentType: String;
  title = "Omdapi";

  constructor(private _omdb: OmdbService) {}

  ngOnInit() {
    this._omdb.contentType.subscribe(data => {
      this.contentType = data;
    });
  }

  dataIsList() {
    return this.contentType === "list";
  }

  dataIsUnit() {
    return this.contentType === "unit";
  }
}
