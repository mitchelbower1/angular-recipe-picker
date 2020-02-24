import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  APP_KEY: string = "6f0d227d05f3790e45683d5cc566fa28";
  APP_ID: string = "e81cf42c";
  favorites: any[] = [];
  constructor(private http: HttpClient) {}

  addToFavorites(favorite: any) {
    console.log(favorite);
    this.favorites.push(favorite);
    console.log(this.favorites);
  }

  getFavorites() {
    return this.favorites;
  }

  getData(
    search: string = "",
    dietary: string = "",
    caloriesAmount: string = ""
  ) {
    // console.log(calories);
    return this.http.get("https://api.edamam.com/search", {
      params: {
        app_key: this.APP_KEY,
        app_id: this.APP_ID,
        q: search,
        calories: caloriesAmount,
        health: dietary
      }
    });
  }
}
