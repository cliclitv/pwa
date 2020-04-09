import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PostComponent } from "./post.component";

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ":id",
        component: PostComponent,
      },
    ]),
  ],
})
export class PostModule {}
