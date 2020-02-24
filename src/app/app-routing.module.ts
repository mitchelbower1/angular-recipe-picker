import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchCriteriaComponent } from "./search-criteria/search-criteria.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { FavoritesListComponent } from "./favorites-list/favorites-list.component";

const routes: Routes = [
  { path: "", redirectTo: "/search", pathMatch: "full" },
  { path: "search", component: SearchCriteriaComponent },
  { path: "details", component: RecipeDetailsComponent },
  { path: "favorites", component: FavoritesListComponent },
  { path: "**", component: SearchCriteriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
