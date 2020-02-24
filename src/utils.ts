import React from "react";
import { useLocation } from "react-router-dom";

export function useMediaQuery(query: string) {
  const [match, setMatch] = React.useState(() => matchMedia(query).matches);

  React.useEffect(() => {
    let active = true;

    const queryList = matchMedia(query);
    const updateMatch = () => {
      if (active) {
        setMatch(queryList.matches);
      }
    };
    updateMatch();
    queryList.addListener(updateMatch);
    return () => {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [query]);

  return match;
}

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function disableScreenScale() {
  let lastTime = 0;
  document.addEventListener("touchstart", evt => {
    if (evt.touches.length > 1) {
      evt.preventDefault();
    }
  });
  document.addEventListener(
    "touchend",
    evt => {
      const nowTime = new Date().getTime();
      if (nowTime - lastTime <= 300) {
        evt.preventDefault();
      }
      lastTime = nowTime;
    },
    false
  );
}
