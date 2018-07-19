import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

/** My Components */
import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { ListComponent } from "./list/list.component";
import { DetailsComponent } from "./details/details.component";
import { OmdbService } from "./omdb.service";

/** Material Components */
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSlideToggleModule
  ],
  providers: [OmdbService],
  bootstrap: [AppComponent]
})
export class AppModule {}
