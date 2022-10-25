import {Link} from 'react-router-dom' 
import React from "react"
import './footer.css'
const Footer = () => {return(<>
<footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>Royale Avenue, Islamabad, Pakistan</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>mail@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Link to="index.html"><img src="/images/q.jpg" className="img-fluid" alt="logo"/></Link>
                            </div>
                            <div className="footer-text ">
                                <p className='text-light'>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <Link to="#"><i className="fab fa-facebook-f facebook-bg"></i></Link>
                                <Link to="#"><i className="fab fa-twitter twitter-bg"></i></Link>
                                <Link to="#"><i className="fab fa-google-plus-g google-bg"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful as</h3>
                            </div>
                            <ul className='text-light'>
                                <li><Link to="#">Home</Link></li>
                                <li><Link to="#">about</Link></li>
                                <li><Link to="#">services</Link></li>
                                <li><Link to="#">portfolio</Link></li>
                                <li><Link to="#">Contact</Link></li>
                                <li><Link to="#">About us</Link></li>
                                <li><Link to="#">Our Services</Link></li>
                                <li><Link to="#">Expert Team</Link></li>
                                <li><Link to="#">Contact us</Link></li>
                                <li><Link to="#">Latest News</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Google Maps</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Find us on maps</p>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.739800059917!2d-76.17560528467865!3d43.06793977914579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f22954e635e3%3A0x5ee902c6d2ed6348!2sSyracuse%20Posters!5e0!3m2!1sen!2sus!4v1645032616639!5m2!1sen!2sus"
                            title="Campus Tour" style= {{border:'0'}} allowFullScreen="" className="map img-fluid"></iframe>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 text-center text-lg-center">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2018, All Right Reserved <Link to="#">Ehteshambutt58</Link></p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </footer></>)

}

export default Footer