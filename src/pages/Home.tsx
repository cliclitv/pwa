import React from "react";
import Recommend from "components/Recommend";
import Ranking from "components/Ranking";
import Calendar from "components/Calendar";
import UCG from "components/UGC";
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
    <UCG />
    <Latest />
  </main>
);
