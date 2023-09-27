import './contact.css';
import Navbar from './navbar';


function contact(){
    return(
        <>
       <Navbar/>
        <section class="contact-banner">
    <div class="container">
        <div class="banner-content">
            <h2 className='head-2-elem'>Contact Us</h2><br></br>
            <h1 className='head-1-elem'>We're here for you...</h1>
            <p>Get in touch with us for any inquiries or feedback. We're all personal bankers, which means that we are fully trained experts with the knowledge you are looking for...</p>
            <div class="timing">
                <h2>Monday-Friday:</h2><p>7 a.m - 9 p.m</p>
            <h2 className='head-2-elem'>Saturday-Sunday:</h2><p>9 a.m - 5 p.m</p>
            </div>
            
        </div>
    </div>
</section>



    <section class="contact-section">
        <div class="container2">
            
            
            <form class="contact-form contact-form-background">
                <form class="contact-form">
                    <div class="form-group">
                        <div class="name-field">
                            <label className='label-elem' for="name">Name:</label>
                            <input type="text" id="name" name="name" required></input>
                        </div>
                        <div class="surname-field">
                            <label className='label-elem' for="surname">Surname:</label>
                            <input type="text" id="surname" name="surname" required></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label className='label-elem' for="email">Email:</label>
                        <input type="email" id="email" name="email" required></input>
                    </div>
                    <div class="form-group">
                        <label className='label-elem' for="phone">Phone No:</label>
                        <input type="tel" id="phone" name="phone" required></input>
                    </div>
                    <div class="form-group">
                        <label className='label-elem' for="country">Country:</label>
                        <select id="country" name="country" required>
                            <option value="usa">USA</option>
                            <option value="canada">Canada</option>
                            <option value="uk">UK</option>
                            
                        </select>
                    </div>
                    <div class="form-group">
                        <label className='label-elem' for="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </form>
            
        </div>
    </section>










    <footer class="footer-space3 footer-box" >
        <div class="footer-logo3">Way2Go</div>
        <div class="footer-container3">

            <div class="footer-links3">
                <div class="footer-section3">
                    <h4>The Company</h4>
                    <ul className='section-ul'>
                        <li className='section-li'><a className='a-link' href="#">About Us</a></li><br></br>
                        <li className='section-li'><a className='a-link' href="#">The Content Team</a></li><br></br>
                        <li className='section-li'><a className='a-link' href="#">Press Office</a></li><br></br>
                        <li className='section-li'><a className='a-link' href="#">Our App</a></li><br></br>
                        <li className='section-li'><a className='a-link' href="#">DE&I</a></li><br></br>
                        <li className='section-li'><a className='a-link' href="#">Sitemap</a></li><br></br>
                    </ul>
                </div>
                <div class="footer-section3">
                    <h4>Contact Us</h4>
                    <ul className='section-ul'>
                        <li className='section-li'><a className='a-link' href="#">Get in Touch</a></li><br></br>
                        <li className='section-li'><a className='a-link' href="#">Advertise & Partner</a></li><br></br>
                        <li className='section-li'><a className='a-link' href="#">Careers</a></li><br></br>
                        <li className='section-li'><a className='a-link' href="#">Freelance Jobs</a></li><br></br>
                        <li className='section-li'><a className='a-link' href="#">Responsible Travel</a></li><br></br>
                    </ul>
                </div>
                <div class="footer-section3">
                    <h4>Legal</h4>
                    <ul className='section-ul'>
                        <li className='section-li'><a className='a-link' href="#">Privacy Policy</a></li><br></br>
                        <li className='section-li'><a className='a-link' href="#">Terms of Use</a></li><br></br>
                        <li className='section-li'><a className='a-link' href="#">Cookie Policy</a></li><br></br>
                        <li className='section-li'><a className='a-link' href="#">Branded Content Policy</a></li><br></br>
                        <li className='section-li'><a className='a-link' href="#">Booking Terms and Conditions</a></li><br></br>
                    </ul>
                </div>
            </div>
            <div class="footer-social3">
                <h4>Follow Us</h4>
                <ul class="social-link-color-ul1">
                    <li className='section-li'><a href="#"  class="social-link-color a-link"><img
                                src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"
                                alt="Facebook"></img>Facebook</a></li><br></br>
                    <li className='section-li'><a href="#" class="social-link-color a-link"><img src="https://imagepng.org/wp-content/uploads/2018/08/twitter-icone-1.png"
                                alt="Twitter"></img>Twitter</a></li><br></br>
                    <li className='section-li'><a href="#" class="social-link-color a-link"><img src="https://www.pngmart.com/files/13/Instagram-Logo-PNG-Image-1.png"
                                alt="Instagram"></img>Instagram</a></li><br></br>
                    <li className='section-li'><a href="#" class="social-link-color a-link"><img
                                src="https://th.bing.com/th/id/R.68859d1a014a1bd67e3fa063d41148a3?rik=dWWdh73VjLk2lQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fyoutube-transparent-png%2fyoutube-transparent-png-15.png&ehk=rZ%2fw10rk3IJdEPBB8ZqssrEApBJLMz%2bJig5nsYs9BqE%3d&risl=&pid=ImgRaw&r=0"
                                alt="YouTube"></img>Youtube</a></li><br></br>
                    <li className='section-li'><a href="#" class="social-link-color a-link"><img
                                src="https://blog.carltonstaffing.com/wp-content/uploads/2020/09/linkedin-icon-logo-png-transparent-2048x2048.png"
                                alt="LinkedIn"></img>Linkedin</a></li><br></br>
                </ul>
            </div>

        </div>
        <div class="copyright3">
            <p  className='bot-para'>Made  by CodeCrafters</p>
            <p className='bot-para'>&copy; 2023 Way2Go All rights reserved.</p>
        </div>
    </footer>
     </>
    )
}
export default contact;