import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "./search.component";
import { CoversModule } from "@/components/covers/covers.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    CoversModule,
    RouterModule.forChild([
      {
        path: ":key",
        component: SearchComponent,
      },
    ]),
  ],
})
export class SearchModule {}
