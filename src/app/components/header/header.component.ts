import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  avatarPath = "/assets/default_avatar.jpg";
  constructor(private router: Router) {}

  ngOnInit(): void {}

  search(s: string) {
    if (s) {
      this.router.navigate(["/search", s]);
    }
  }
}
