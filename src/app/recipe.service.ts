import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  APP_KEY: string = "6f0d227d05f3790e45683d5cc566fa28";
  APP_ID: string = "e81cf42c";
  favorites: any[] = [];
  selectedRecipe: any;
  constructor(private http: HttpClient) {}

  addToFavorites(favorite: any) {
    console.log(favorite);
    this.favorites.push(favorite);
    console.log(this.favorites);
  }

  getFavorites() {
    return this.favorites;
  }

  deleteFavorite(index: number) {
    console.log(this.favorites);
    this.favorites.splice(index, 1);
    console.log(this.favorites);
  }

  setSelectedRecipe(recipe: any) {
    this.selectedRecipe = recipe;
    console.log(this.selectedRecipe);
  }

  getSelectedRecipe() {
    console.log("here");
    console.log(this.selectedRecipe);
    return this.selectedRecipe;
  }

  getData(
    search: string = "",
    dietary: string = "",
    caloriesAmount: string = ""
  ) {
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
