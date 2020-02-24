import { Component, OnInit, Input } from "@angular/core";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Input() recipeList: any;

  constructor(private service: RecipeService) {}
  addToFavorites(favorite: any) {
    // console.log(favorite);
    this.service.addToFavorites(favorite);
  }

  ngOnInit(): void {
    // console.log(this.recipeList);
  }
}
