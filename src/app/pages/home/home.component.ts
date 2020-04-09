import { Component, OnInit } from "@angular/core";
import {} from "@angular/router";
import { Post } from "@/types/post";
import { list, ranking } from "@/services/post";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  recommands: Post[] = [];
  ranking: Post[] = [];
  calendar: Post[] = [];
  ucg: Post[] = [];
  updated: Post[] = [];
  constructor() {}

  ngOnInit(): void {
    list("", "推荐", 1, 10).then((data) => {
      this.recommands = data.posts;
    });
    ranking().then((data) => {
      this.ranking = data.posts;
    });
    list("新番", "", 1, 100, "nowait").then((data) => {
      this.calendar = data.posts;
    });
    list("原创", "", 2, 4).then((data) => {
      this.ucg = data.posts;
    });
    list("bgm", "", 1, 30).then((data) => {
      this.updated = data.posts;
    });
  }
}
