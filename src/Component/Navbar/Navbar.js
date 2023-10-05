import React ,{useState,useEffect} from 'react'
import abc from "../../assets/img/fulllogo_transparent_nobuffer.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [isNavbarFixed, setNavbarFixed] = useState(false);

  const [active, setActive] = useState('home')

  const scrollView = (id) => {
      try {
          setActive(id)
          var element = document.getElementById(id);
          element && element.scrollIntoView({ behavior: "smooth" });
      } catch (err) {
          console.error("error occur on scrollView()", err)
      }
  }

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavbarFixed(true);
    } else {
      setNavbarFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
       
    {/* <div class="preloader" id="preloader">
        <div class="preloader-inner">
            <div class="spinner">
                <div class="dot1"></div>
                <div class="dot2"></div>
            </div>
        </div>
    </div> */}
   
    {/* <div class="td-search-popup" id="td-search-popup">
        <!-- <form action="" class="search-form">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Search.....">
            </div>
            <button type="submit" class="submit-btn"><i class="fa fa-search"></i></button>
        </form> -->
    </div> */}




    <div class="body-overlay" id="body-overlay"></div>

    {/* <!-- navbar start --> */}
    <div class="navbar-area">
        {/* <!-- navbar top start --> */}
        {/* <div class="navbar-top">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 text-md-left text-center">
                        <ul>
                            <li><p style={{color: "white"}}><i class="fa fa-map-marker" ></i>8750 Perimeter Park Blvd Jacksonville, FL 32216</p></li>
                            <li><p style={{color: "white"}}><i class="fa fa-envelope-o"></i>  info@website.com</p></li> 
                      
                      
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <ul class="topbar-right text-md-right text-center">
                            <li class="social-area">
                                <a href="#" style={{color: "white"}}><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#" style={{color: "white"}}><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#" style={{color: "white"}}><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href="#" style={{color: "white"}}><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>  */}
       <nav  className={`navbar navbar-area-2 navbar-area navbar-expand-lg ${
          isNavbarFixed ? 'fixed-navbar' : ''
        }`}>
      <div className="container nav-container">
        <div className="responsive-mobile-menu">
          <button
            className={`menu toggle-btn d-block d-lg-none ${
              isNavbarOpen ? 'active' : ''
            }`}
            onClick={toggleNavbar}
            aria-expanded={isNavbarOpen}
            aria-label="Toggle navigation"
          >
            <span className="icon-left"></span>
            <span className="icon-right"></span>
          </button>
        </div>
        <div className="logo" style={{width:"400px"}}>
          <Link onClick={() => scrollView('home')}>
            <img src={abc} alt="img" />
          </Link>
        </div>
        <div
          className={`collapse navbar-collapse ${
            isNavbarOpen ? 'show' : ''
          }`}
          id="edumint_main_menu"
        >
          <ul className="navbar-nav menu-open">
            {/* <li>
              <Link to="">Solutions</Link>
            </li> */}

            {/* <li className="menu-item-has-children current-menu-item">
              <a href="#">Resources</a>
              <ul className="sub-menu">
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/event">Webinar</Link>
                </li>
              </ul>
            </li> */}

            <li>
              <Link onClick={() => scrollView('feature')}>Features</Link>
            </li>

            <li>
              <Link onClick={() => scrollView('contact')}>Contact Us</Link>
            </li>
            {/* <li>
              <Link
                to="https://gnosislabs.live/login"
                className="btn btn-base b-animate-3"
                style={{ color: '#fff' }}
                target="_blank"
              >
                Login
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
    </div>
    </div>
  )
}

export default Navbar