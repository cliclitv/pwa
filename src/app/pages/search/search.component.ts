import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Post } from "@/types/post";
import { search } from "@/services/post";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  searchResult: Post[];
  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const key = this.activatedRoute.snapshot.paramMap.get("key");
    search(key).then((data) => {
      this.searchResult = data.posts;
    });
  }
}
