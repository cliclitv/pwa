import React from "react";
import Recommend from "components/Recommend";
import Ranking from "components/Ranking";
import Calendar from "components/Calendar";
import Latest from "components/Latest";

export default () => (
  <main
    style={{
      padding: "8px"
    }}
  >
    <Recommend />
    <Ranking />
    <Calendar />
    <Latest />
  </main>
);