import './styles.css';
import { Link } from "react-router-dom";
import Home_Navbar from './Home_navbar.js';

function Home(){
    
    return(
        <>
        <header className='head'>
        <div class="top-message" style={{backgroundColor: 'rgb(63, 255, 0)'}}>
             Book our small-group
                    adventures here and explore the world, while being good to it! 
        </div>
        <Home_Navbar/>
        </header>
       <section class="featured-content">
      
      <div class="hero">
          <h1 className='welcome'>Welcome to Way2Go</h1>
          <p className='wel-para'>Discover the world's cultures through our articles and guides. No</p><br></br>
          <p className='wel-para'>tourists traps in sight.</p>
          <Link to= '/Map/:id' id='explore-button-link'><button className='explore-button'>
          <span class="text">Explore Now</span>
</button></Link>
      </div>
  </section>

  <h2 class="special-offers-heading pinkbg offers">Our Special Offers!!</h2>
  <section class="no-background trip-offers pinkbg">


      <div class="trip-card img_1" style={{boxSizing:'none'}}>

          <h3 className='trip-card-headings'>Trip to the Himalayas</h3>
          <p className='no-bg-para trip-card-para'>Explore the breathtaking beauty of the Himalayan mountains with our exclusive package.</p>
          <p className='no-bg-para trip-card-para'>Experience the Road Less Traveled</p>
          <a href="#" class="offer-link">View Details</a>
      </div>
      <div class="trip-card img_2" style={{boxSizing:'none'}}>

          <h3 className='trip-card-headings'>Lal Quila (Red Fort) in India</h3>
          <p className='no-bg-para trip-card-para'>Explore the historical beauty of Lal Quila (Red Fort) in India, an architectural masterpiece that
              reflects India's rich heritage.</p>
          <p className='no-bg-para trip-card-para'>Journey through Time at Lal Quila</p>
          <a href="#" class="offer-link">View Details</a>
      </div>
      <div class="trip-card img_3" style={{boxSizing:'none'}}>

          <h3 className='trip-card-headings'>Long Ride to Fortuner Trip</h3>
          <p className='no-bg-para trip-card-para'>Embark on an epic journey with our luxurious Fortuner trip. Experience the thrill of the open road.</p>
          <p className='no-bg-para trip-card-para'>Luxury on Wheels - Fortuner Adventure</p>
          <a href="#" class="offer-link">View Details</a>
      </div>
      <div class="trip-card img_4" style={{boxSizing:'none'}}>

          <h3 className='trip-card-headings'>Statue of Liberty</h3>
          <p className='no-bg-para trip-card-para'>Visit the iconic Statue of Liberty in New York City and explore the history of freedom with our exclusive offers.</p>
          <p className='no-bg-para trip-card-para'>Liberty Awaits - Statue of Freedom</p>
          <a href="#" class="offer-link">View Details</a>
      </div>
      <div class="trip-card img_5" style={{boxSizing:'none'}}>

          <h3 className='trip-card-headings'>Eiffel Tower</h3>
          <p className='no-bg-para trip-card-para'>Experience the romance of Paris with a visit to the Eiffel Tower. Enjoy breathtaking views of the city of
              love.</p>
          <p className='no-bg-para trip-card-para'>Love in the Air - Eiffel Tower Experience</p>
          <a href="#" class="offer-link">View Details</a>
      </div>
      <div class="trip-card img_6" style={{boxSizing:'none'}}>

          <h3 className='trip-card-headings'>Darjeeling</h3>
          <p className='no-bg-para trip-card-para'>Explore the picturesque hill station of Darjeeling. Sip on world-famous tea and enjoy stunning views of
              the Himalayas.</p>
          <p className='no-bg-para trip-card-para'>Sip, Savor, and See - Darjeeling Delight</p>
          <a href="#" class="offer-link">View Details</a>
      </div>

     

  </section>






  <footer class="footer-space footer-elem">
      <div class="footer-logo">Way2Go</div>
      <div class="footer-container">

          <div class="footer-links">
              <div class="footer-section">
                  <h4 className='footer-head'>The Company</h4>
                  <ul className='footer-ul'>
                      <li className='footer-li'><a className='footer-link' href="#">About Us</a></li><br></br>
                      <li className='footer-li'><a className='footer-link' href="#">The Content Team</a></li><br></br>
                      <li className='footer-li'><a className='footer-link' href="#">Press Office</a></li><br></br>
                      <li className='footer-li'><a className='footer-link' href="#">Our App</a></li><br></br>
                      <li className='footer-li'><a className='footer-link' href="#">DE&I</a></li><br></br>

                  </ul>
              </div>
              <div class="footer-section">
                  <h4 className='footer-head'>Contact Us</h4>
                  <ul className='footer-ul'>
                      <li className='footer-li'><a className='footer-link' href="#">Get in Touch</a></li><br></br>
                      <li className='footer-li'><a className='footer-link' href="#">Advertise & Partner</a></li><br></br>
                      <li className='footer-li'><a className='footer-link' href="#">Careers</a></li><br></br>
                      <li className='footer-li'><a className='footer-link' href="#">Freelance Jobs</a></li><br></br>
                      <li className='footer-li'><a className='footer-link' href="#">Responsible Travel</a></li><br></br>
                  </ul>
              </div>
              <div class="footer-section">
                  <h4 className='footer-head'>Legal</h4>
                  <ul className='footer-ul'>
                      <li className='footer-li'><a className='footer-link' href="#">Privacy Policy</a></li><br></br>
                      <li className='footer-li'><a className='footer-link' href="#">Terms of Use</a></li><br></br>
                      <li className='footer-li'><a className='footer-link' href="#">Cookie Policy</a></li><br></br>
                      <li className='footer-li'><a className='footer-link' href="#">Branded Content Policy</a></li><br></br>
                      <li className='footer-li'><a className='footer-link' href="#">Booking Terms and Conditions</a></li><br></br>
                  </ul>
              </div>
          </div>
          <div class="footer-social">
              <h4 className='footer-head footer-h4'>Follow Us</h4>
              <ul class="social-link-color footer-ul">
                    <li className='footer-li'><a href="#"  class="social-link-color footer-link"><img className='footer-img'
                                src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"
                                alt="Facebook"></img>Facebook</a></li><br></br>
                    <li className='footer-li'><a href="#" class="social-link-color footer-link"><img className='footer-img' src="https://imagepng.org/wp-content/uploads/2018/08/twitter-icone-1.png"
                                alt="Twitter"></img>Twitter</a></li><br></br>
                    <li className='footer-li'><a href="#" class="social-link-color footer-link"><img className='footer-img' src="https://www.pngmart.com/files/13/Instagram-Logo-PNG-Image-1.png"
                                alt="Instagram"></img>Instagram</a></li><br></br>
                    <li className='footer-li'><a href="#" class="social-link-color footer-link"><img className='footer-img'
                                src="https://th.bing.com/th/id/R.68859d1a014a1bd67e3fa063d41148a3?rik=dWWdh73VjLk2lQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fyoutube-transparent-png%2fyoutube-transparent-png-15.png&ehk=rZ%2fw10rk3IJdEPBB8ZqssrEApBJLMz%2bJig5nsYs9BqE%3d&risl=&pid=ImgRaw&r=0"
                                alt="YouTube"></img>Youtube</a></li><br></br>
                    <li className='footer-li'><a href="#" class="social-link-color footer-link"><img className='footer-img'
                                src="https://blog.carltonstaffing.com/wp-content/uploads/2020/09/linkedin-icon-logo-png-transparent-2048x2048.png"
                                alt="LinkedIn"></img>Linkedin</a></li><br></br>
                </ul>
          </div>

      </div>
      <div class="copyright">
          <p className='footer-para'>Made by CodeCrafters</p>
          <p className='footer-para'>&copy; 2023 Way2Go All rights reserved.</p>
      </div>
  </footer>

      
      
      </>
    );
    
}

export default Home;