import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.css"]
})
export class RecipeDetailsComponent implements OnInit {
  selectedRecipe: any;
  constructor(private service: RecipeService) {}

  ngOnInit(): void {
    this.selectedRecipe = this.service.getSelectedRecipe();
    console.log(this.selectedRecipe);
  }
}
