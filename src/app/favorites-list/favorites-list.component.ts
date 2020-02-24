import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-favorites-list",
  templateUrl: "./favorites-list.component.html",
  styleUrls: ["./favorites-list.component.css"]
})
export class FavoritesListComponent implements OnInit {
  constructor(private service: RecipeService) {}
  favorites: any[];

  ngOnInit(): void {
    this.favorites = this.service.getFavorites();
  }
}
