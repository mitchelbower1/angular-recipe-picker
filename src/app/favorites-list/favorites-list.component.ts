import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../recipe.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-favorites-list",
  templateUrl: "./favorites-list.component.html",
  styleUrls: ["./favorites-list.component.css"]
})
export class FavoritesListComponent implements OnInit {
  favorites: any[];
  route: any;
  constructor(private service: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.favorites = this.service.getFavorites();
  }
  deleteFavorite(index: number) {
    this.service.deleteFavorite(index);
  }
  seeDetails(recipe: any) {
    this.service.setSelectedRecipe(recipe);
    this.router.navigate(["details"]);
  }
}
