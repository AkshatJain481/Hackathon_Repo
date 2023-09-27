import React, { useEffect, useRef } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
// import "../App.css";
import style1 from "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../navbar";
import { click } from "@testing-library/user-event/dist/click";
const Sidebar = () => {
  const { pathname } = useLocation();
  const params = useParams();
  
  


    

  
  return (

    <>
    
     <div className={style1['vh-100'] + style1['d-flex']} > 
    <div>
     
      
  
    <div
      className={style1['h-100'] + style1['d-flex'] + style1['flex-shrink-0'] + style1['bg-light'] }  
      style={{ width: "4.5rem"}}
    >
      
      <div className={style1['h-100'] + style1['d-flex']}>
        <ul className={style1['nav']+ style1['nav-pills']+style1['nav-flush']+style1['m-auto']+style1['flex-column'] + style1['text-center'] + style1['h-50'] + style1['justify-content-around']} style={{paddingLeft: 23.5, height: 715, margin: 0}}> {/* nav nav-pills nav-flush m-auto flex-column  text-center h-50  justify-content-around */}
         
          <li className={style1["nav-item"]} style={{listStyle: 'none',paddingTop: 152}} >
            <Link to="/Map/restaurants" >
              <Rest color={params.id === "restaurants" ? "#4285F4" : "gray"} />
            </Link>
          </li>

          <li className={style1["nav-item"]} style={{listStyle: 'none',marginTop:152}}>
            {" "}
            <Link to="/Map/hotels" >
              <Hotel color={params.id === "hotels" ? "#4285F4" : "gray"} />
            </Link>
          </li>
          <li className={style1["nav-item"]} style={{listStyle: 'none',marginTop: 152}}>
            {" "}
            <Link to="/Map/attractions">
              <Ent color={params.id === "attractions" ? "#4285F4" : "gray"} />
            </Link>
          </li>
        </ul>
      </div>
        </div>

   
  </div>
    </div>
    <script>
   
    </script>
    </>
    
  );
  
};

export default Sidebar;

const Home = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill={color}
      className="bi bi-house-door-fill"
      viewBox="0 0 16 16"
    >
      <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
    </svg>
  );
};
const Rest = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill={color}
      className="bi bi-cloud-fog"
      viewBox="0 0 16 16"
    >
      <path d="M3 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm10.405-9.473a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 12H13a3 3 0 0 0 .405-5.973zM8.5 3a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 3z" />
    </svg>
  );
};
const Hotel = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill={color}
      className="bi bi-house-heart-fill"
      viewBox="0 0 16 16"
    >
      <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707L7.293 1.5Z" />
      <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293Zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z" />
    </svg>
  );
};
const Ent = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill={color}
      className="bi bi-emoji-smile-fill"
      viewBox="0 0 16 16"
    >
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
    </svg>
  );
};


