 import './about.css';
import Navbar from "./navbar";



function about(){
    return(
     <>
     <Navbar/>
        <header class="heading">
        <h1 className="head-1">About Us</h1>
    </header>
    <div class="div-container">
        <div class="div-image-section">
            
            <img className="div-image-section-img" src="https://th.bing.com/th/id/R.ce10fddec37a0f09ce1fcb7c9b619ce6?rik=jLNCxwabmA5CPg&riu=http%3a%2f%2fbus-tours.regionaldirectory.us%2fbus-tour-720.jpg&ehk=aPT7y8jsSDXqJ6qGHNaFQrUfaupVvJ9AR%2bvMMvYyI3U%3d&risl=&pid=ImgRaw&r=0" width="70%" height="60%" alt="Image 1"></img>
        </div>
        <div class="div-text-section">
          
            <h2 className="head-2">WHAT WE DO...</h2><br></br>
            <p className='about-us-paragraph'>Welcome to Your Travel Website, your trusted source for unforgettable travel experiences...</p>
            <p className='about-us-paragraph'>We are passionate about exploration and dedicated to making your journeys extraordinary.</p><br></br>
            <p className='about-us-paragraph'>Our mission is to inspire, inform, and assist travelers like you in discovering the beauty and wonder of the world. Whether you're an adventurer seeking new horizons, a culture enthusiast, or simply looking for relaxation, we have something for everyone.</p>
            <p className='about-us-paragraph'>Join us on this incredible journey and let's explore the world together!</p>
        </div>
    </div>
    

    
    <section class="team-section">
        <h2 class="team-heading">Our Team Members</h2>
        <div class="team-members">
           
            <div class="div-team-card">
                <div class="circular-image">
                    <img className="div-team-card-img" src="team_member_2.jpg" alt="Team Member 1"></img>
                </div>
                <h3 className="div-team-card-head-3">AKSHAT JAIN</h3>
                <p className="div-team-card-para">Team Lead</p>
            </div>
            <div class="div-team-card">
                <div class="circular-image">
                    <img className="div-team-card-img"  src=" sakshipic.jpg" alt="Team Member 2"></img>
                </div>
                <h3 className="div-team-card-head-3">SAKSHI</h3>
                <p className="div-team-card-para">Frontend Developer</p>
                
            </div>
            <div class="div-team-card">
                <div class="circular-image">
                    <img className="div-team-card-img"  src="team_member_2.jpg" alt="Team Member 2"></img>
                </div>
                <h3 className="div-team-card-head-3">SHIVANGI</h3>
                <p className="div-team-card-para">Graphic Designer</p>
            </div>
            <div class="div-team-card">
                <div class="circular-image">
                    <img className="div-team-card-img"  src="team_member_2.jpg" alt="Team Member 2"></img>
                </div>
                <h3 className="div-team-card-head-3">KOMAL</h3>
                <p className="div-team-card-para">QA Lead</p>
                
            </div>
            <div class="div-team-card">
                <div  class="circular-image">
                    <img className="div-team-card-img"  src="team_member_2.jpg" alt="Team Member 2"></img>
                </div>
                <h3 className="div-team-card-head-3">UTKARSH JATAIN</h3>
                <p className="div-team-card-para">Backend Developer</p>
            </div>
            <div class="div-team-card">
                <div class="circular-image">
                    <img className="div-team-card-img"  src="team_member_2.jpg" alt="Team Member 2"></img>
                </div>
                <h3 className="div-team-card-head-3">RAHUL KHANNA</h3>
                <p className="div-team-card-para">Tech Lead</p>
            </div>
            
           
        </div>
    </section>
    
    
    <footer class="footer-block" >
        <div class="div-footer-logo">Way2Go</div>
        <div class="div-footer-container">

            <div class="div-footer-links">
                <div class="div-footer-section">
                    <h4 className='head-4'>The Company</h4>
                    <ul className='div-footer-section-ul'>
                        <li className='div-footer-section-li'><a className='div-footer-section-a'  href="#">About Us</a></li>
                        <li className='div-footer-section-li'><a className='div-footer-section-a'  href="#">The Content Team</a></li>
                        <li className='div-footer-section-li'><a className='div-footer-section-a'  href="#">Press Office</a></li>
                        <li className='div-footer-section-li'><a className='div-footer-section-a'  href="#">Our App</a></li>
                        <li className='div-footer-section-li'><a className='div-footer-section-a'  href="#">DE&I</a></li>
                        
                    </ul>
                </div>
                <div class="div-footer-section">
                    <h4 className='head-4'>Contact Us</h4>
                    <ul className='div-footer-section-ul'>
                        <li className='div-footer-section-li'><a className='div-footer-section-a'  href="#">Get in Touch</a></li>
                        <li className='div-footer-section-li'><a className='div-footer-section-a'  href="#">Advertise & Partner</a></li>
                        <li className='div-footer-section-li'><a className='div-footer-section-a'  href="#">Careers</a></li>
                        <li className='div-footer-section-li'><a className='div-footer-section-a'  href="#">Freelance Jobs</a></li>
                        <li className='div-footer-section-li'><a className='div-footer-section-a'  href="#">Responsible Travel</a></li>
                    </ul>
                </div>
                <div class="div-footer-section">
                    <h4 className='head-4'>Legal</h4>
                    <ul className='div-footer-section-ul'>
                        <li className='div-footer-section-li'><a className='div-footer-section-a' href="#">Privacy Policy</a></li>
                        <li className='div-footer-section-li'><a className='div-footer-section-a'  href="#">Terms of Use</a></li>
                        <li className='div-footer-section-li'><a className='div-footer-section-a'  href="#">Cookie Policy</a></li>
                        <li className='div-footer-section-li'><a className='div-footer-section-a'  href="#">Branded Content Policy</a></li>
                        <li className='div-footer-section-li'><a className='div-footer-section-a'  href="#">Booking Terms and Conditions</a></li>
                    </ul>
                </div>
            </div>
            <div class="div-footer-social">
                <h4 className='head-4 footer-social-head-4'> Follow Us</h4>
                <ul class="social-link-color div-footer-social-ul">
                    <li className='div-footer-social-li '><a href="#"  class="social-link-color "><img
                                src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"
                                alt="Facebook"></img>Facebook</a></li>
                    <li className='div-footer-social-li '><a href="#" class="social-link-color"><img src="https://imagepng.org/wp-content/uploads/2018/08/twitter-icone-1.png"
                                alt="Twitter"></img>Twitter</a></li>
                    <li className='div-footer-social-li '><a href="#" class="social-link-color"><img src="https://www.pngmart.com/files/13/Instagram-Logo-PNG-Image-1.png"
                                alt="Instagram"></img>Instagram</a></li>
                    <li className='div-footer-social-li '><a href="#" class="social-link-color"><img
                                src="https://th.bing.com/th/id/R.68859d1a014a1bd67e3fa063d41148a3?rik=dWWdh73VjLk2lQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fyoutube-transparent-png%2fyoutube-transparent-png-15.png&ehk=rZ%2fw10rk3IJdEPBB8ZqssrEApBJLMz%2bJig5nsYs9BqE%3d&risl=&pid=ImgRaw&r=0"
                                alt="YouTube"></img>Youtube</a></li>
                    <li className='div-footer-social-li '><a href="#" class="social-link-color"><img
                                src="https://blog.carltonstaffing.com/wp-content/uploads/2020/09/linkedin-icon-logo-png-transparent-2048x2048.png"
                                alt="LinkedIn"></img>Linkedin</a></li>
                </ul>
            </div>

        </div>
        <div class="copyright1">
            <p className='footer-paragraph'>Made by CodeCrafters</p>
            <p className='footer-paragraph'>&copy; 2023 Way2Go All rights reserved.</p>
        </div>
    </footer>
     </>
    )
}
export default about;