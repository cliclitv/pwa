import { Component, OnInit } from "@angular/core";
import Eplayer from "eplayer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    customElements.define("e-player", Eplayer);
  }
}
