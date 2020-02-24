import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../recipe.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  constructor(private service: RecipeService) {}

  ngOnInit(): void {}
  getData(form: NgForm) {
    this.service
      .getData(form.value.search, form.value.health, form.value.calories)
      .subscribe(response => {
        console.log(response);
      });
  }
}
