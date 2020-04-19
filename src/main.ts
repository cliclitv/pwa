import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

disableScreenScale();

function disableScreenScale(): void {
  let lastTime = 0;
  document.addEventListener(
    "touchstart",
    (evt) => {
      if (evt.touches.length > 1) {
        evt.preventDefault();
      }
    },
    { passive: false },
  );
  document.addEventListener(
    "touchend",
    (evt) => {
      const nowTime = new Date().getTime();
      if (nowTime - lastTime <= 300) {
        evt.preventDefault();
      }
      lastTime = nowTime;
    },
    { passive: false },
  );
}
