import { React, useEffect, useState } from "react";
function generateQuest(props) {
  console.log(props);
  useEffect(() => {
    let q = props.quest;
  }, []);

  return <div>s</div>;
}
export default generateQuest;
