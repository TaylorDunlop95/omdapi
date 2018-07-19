import { TestBed, inject } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { OmdbService } from "./omdb.service";

describe("OmdbService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmdbService],
      imports: [HttpClientModule]
    });
  });

  it("should be created", inject([OmdbService], (service: OmdbService) => {
    expect(service).toBeTruthy();
  }));
});
