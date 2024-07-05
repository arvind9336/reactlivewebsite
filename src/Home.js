import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Common from "./Common";
import web from "../src/image/man.jpg";

function Home() {
  return (
    <>
      <Common name='Grow your business with' imgsrc={web} visit='/service' btname='Get Started'/>
    </>
  );
}
export default Home;
