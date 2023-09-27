import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

if(window.location.pathname != '/Map/:id' && window.location.pathname != '/Map/restaurants' && window.location.pathname != '/Map/hotels' && window.location.pathname != '/Map/attractions'){
    const navbar = document.getElementsByClassName('nv');

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar[0].classList.add("opaque");
        } else {
            navbar[0].classList.remove("opaque");
        }
    });

}
 