import { Component, OnInit, Input } from "@angular/core";
import { Post } from "@/types/post";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
})
export class CalendarComponent implements OnInit {
  private postsWithDay: Post[][] = [[], [], [], [], [], [], []];

  @Input()
  set posts(p: Post[]) {
    if (p) {
      for (const i of p) {
        const day = new Date(i.time.split(" ")[0]).getDay();
        this.postsWithDay[day].push(i);
      }
    }
  }

  get posts() {
    return this.postsWithDay[this.activeDay];
  }

  calendar = [
    { key: 0, content: "周日" },
    { key: 1, content: "周一" },
    { key: 2, content: "周二" },
    { key: 3, content: "周三" },
    { key: 4, content: "周四" },
    { key: 5, content: "周五" },
    { key: 6, content: "周六" },
  ];
  activeDay = new Date().getDay();
  cols = 5;
  constructor() {}

  ngOnInit(): void {}

  changeDay(d: number) {
    this.activeDay = d;
  }
}
