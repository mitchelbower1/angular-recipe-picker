import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchCriteriaComponent } from "./search-criteria/search-criteria.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { FavoritesListComponent } from "./favorites-list/favorites-list.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    FavoritesListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
