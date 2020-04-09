import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { VideoComponent } from "./video.component";

@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: VideoComponent,
      },
    ]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VideoModule {}
