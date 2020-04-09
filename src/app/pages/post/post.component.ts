import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import snarkdown from "snarkdown";
import { details } from "@/services/post";
import { Post } from "@/types/post";
import { list } from "@/services/video";
import { avatar } from "@/services/user";
import { Video } from "@/types/video";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  post: Post;
  videoNav: Video[];
  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    details(id).then((data) => {
      this.post = data.result;
    });
    list(id).then((data) => {
      this.videoNav = data;
    });
  }

  md(s: string) {
    return snarkdown(s);
  }

  getAvatar(qq?: string) {
    return avatar(qq);
  }
}
