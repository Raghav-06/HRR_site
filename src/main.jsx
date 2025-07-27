import React from "react";
import { createRoot } from "react-dom/client";
import Header
 from "/src/header";
import Footer from "./footer";
const root =createRoot(document.getElementById("root"));
root.render(
<div id="root">
<Header/>
<main style={{flex:"1"}}></main>
<Footer/>
</div>
);