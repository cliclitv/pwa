import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { RouteReuseStrategy } from "@angular/router";
import { AppRoutingCache } from "./app-routing-cache";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: AppRoutingCache }],
  bootstrap: [AppComponent],
})
export class AppModule {}
