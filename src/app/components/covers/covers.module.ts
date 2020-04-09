import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoversComponent } from "./covers.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [CoversComponent],
  imports: [CommonModule, RouterModule],
  exports: [CoversComponent],
})
export class CoversModule {}
