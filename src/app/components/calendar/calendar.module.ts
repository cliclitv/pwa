import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarComponent } from "./calendar.component";
import { CoversModule } from "../covers/covers.module";

@NgModule({
  declarations: [CalendarComponent],
  imports: [CommonModule, CoversModule],
  exports: [CalendarComponent],
})
export class CalendarModule {}
