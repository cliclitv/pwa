import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { play } from "@/services/video";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"],
})
export class VideoComponent implements OnInit {
  videoInfo: { url: string; type: string };
  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    let url = this.activatedRoute.snapshot.queryParamMap.get("url");
    play(url).then((data) => {
      this.videoInfo = { url: data.url, type: data.type };
    });
  }
}
