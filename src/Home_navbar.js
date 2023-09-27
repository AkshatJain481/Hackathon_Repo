



import { Outlet, Link } from "react-router-dom";
function Home_Navbar(){
 
    return(
        <>
        <nav id="nvbar" className='nv' style={{marginTop: 40}}>
        <div className="logo">
          <img src='https://static.wixstatic.com/media/f06d2c_f0d7d07dbc334f938ef89e6d6e46f346~mv2_d_9125_3125_s_4_2.png' alt="logo" width="150px" />
      </div>
      <ul className="navbar-item-list">
      <Link to= '/' ><li className="navbar-item"><a  className="navbar-item-link" id='active1' >Home</a></li></Link>
      <Link to= '/about'><li className="navbar-item"><a  className="navbar-item-link" >About Us</a></li></Link>
          <Link to= '/Map/:id'><li className="navbar-item"><a className="navbar-item-link"  >Explore </a></li></Link>
          <Link to= '/contact'><li className="navbar-item"><a className="navbar-item-link" >Contact</a></li></Link>
      </ul>
        </nav>
      <Outlet/>  
      </>
    );
    
}


export default Home_Navbar;