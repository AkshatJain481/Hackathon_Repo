



import { Outlet, Link } from "react-router-dom";
function Navbar(){


    return(
        <>
        <nav id="nbar" className='nv'>
        <div className="logo1">
          <img src='https://static.wixstatic.com/media/f06d2c_f0d7d07dbc334f938ef89e6d6e46f346~mv2_d_9125_3125_s_4_2.png' alt="logo" width="150px" />
      </div>
      <ul className="nav-item-list">
      <Link to= '/' ><li className="nav-item"><a  className="nav-item-link" id='active1' >Home</a></li></Link>
      <Link to= '/about'><li className="nav-item"><a  className="nav-item-link" >About Us</a></li></Link>
          <Link to= '/Map/:id'><li className="nav-item"><a className="nav-item-link"  >Explore </a></li></Link>
          <Link to= '/contact'><li className="nav-item"><a className="nav-item-link" >Contact</a></li></Link>
      </ul>
        </nav>
      <Outlet/>  
      </>
    );
    
}


export default Navbar;