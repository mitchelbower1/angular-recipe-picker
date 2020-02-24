import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-favorites-list",
  templateUrl: "./favorites-list.component.html",
  styleUrls: ["./favorites-list.component.css"]
})
export class FavoritesListComponent implements OnInit {
  favorites: any[];
  constructor(private service: RecipeService) {}

  ngOnInit(): void {
    this.favorites = this.service.getFavorites();
  }
  deleteFavorite(index: number) {
    this.service.deleteFavorite(index);
  }
}
