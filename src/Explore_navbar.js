import './Explore_navbar.css';



import { Outlet, Link } from "react-router-dom";
function Ex_Navbar(){
 
    return(
        <>
        <nav  className='nv Explore-nv'>
        <div className="Ex-logo">
          <img src='https://static.wixstatic.com/media/f06d2c_f0d7d07dbc334f938ef89e6d6e46f346~mv2_d_9125_3125_s_4_2.png' alt="logo" width="150px" />
      </div>
      <ul className="Ex-ul">
      <Link to= '/' ><li className="Ex-li"><a  className="Ex-a" id='active1' >Home</a></li></Link>
      <Link to= '/about'><li className="Ex-li"><a  className="Ex-a" >About Us</a></li></Link>
          <Link to= '/Map/:id'><li className="Ex-li"><a className="Ex-a"  >Explore </a></li></Link>
          <Link to= '/contact'><li className="Ex-li"><a className="Ex-a" >Contact</a></li></Link>
      </ul>
        </nav>
      <Outlet/>  
      </>
    );
}


export default Ex_Navbar;