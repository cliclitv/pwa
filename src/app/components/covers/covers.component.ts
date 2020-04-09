import { Component, OnInit, Input } from "@angular/core";
import { Post } from "@/types/post";
import { getSuo } from "@/services/dirty";

@Component({
  selector: "app-covers",
  templateUrl: "./covers.component.html",
  styleUrls: ["./covers.component.scss"],
})
export class CoversComponent implements OnInit {
  @Input()
  posts: Post[];
  @Input()
  cols = Math.floor(document.body.clientWidth / (150 + 16 * 2));

  constructor() {}

  ngOnInit(): void {}

  getCoverImg(s: string) {
    return getSuo(s);
  }
}
