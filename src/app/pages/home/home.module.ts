import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { CoversModule } from "@/components/covers/covers.module";
import { CalendarModule } from "@/components/calendar/calendar.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CoversModule,
    CalendarModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomeComponent,
      },
    ]),
  ],
})
export class HomeModule {}
