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
  baseWidth = 150;
  @Input()
  basePadding = 16;
  cols: number;

  constructor() {}

  ngOnInit(): void {
    this.cols = Math.floor(
      document.body.clientWidth /
        ((this.baseWidth + this.basePadding * 2) + 16),
    );
  }

  @HostListener("window:resize", ["$event.target.document"])
  onResize(d: Document): void {
    this.cols = Math.floor(
      d.body.clientWidth / ((this.baseWidth + this.basePadding * 2) + 16),
    );
  }

  getCoverImg(s: string): string {
    return getSuo(s);
  }
}
