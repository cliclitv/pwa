import { Component, OnInit, Input, HostListener } from "@angular/core";
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

  @HostListener("window:resize", ["$event.target.document"])
  onResize(d: Document): void {
    this.cols = Math.floor(d.body.clientWidth / (150 + 16 * 2));
  }

  getCoverImg(s: string): string {
    return getSuo(s);
  }
}
