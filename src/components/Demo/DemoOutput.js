import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DEMO-OUTPUT RUNNING");
  return <MyParagraph>{props.show ? "This is p" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);
