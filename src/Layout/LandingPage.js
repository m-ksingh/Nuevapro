import React from 'react'

import f1 from "../assets/img/intro/4.png"
import f2 from "../assets/img/intro/6.png"
import f3 from "../assets/img/intro/5.png"
import ff1 from "../assets/img/intro/f1.jpg"
import ff2 from "../assets/img/intro/f2.png"
import ff3 from "../assets/img/intro/f3.jpg"
import ff4 from "../assets/img/intro/f4.png"

import f4 from "../assets/img/icon/20.png"
import f5 from "../assets/img/icon/21.png"
import f6 from "../assets/img/icon/16.png" 
import f7 from "../assets/img/icon/17.png"                    

import f8 from "../assets/img/icon/18.png"                    

import Background from '../assets/img/intro/veteran.png';
const LandingPage = () => {
    
    const [formData, setFormData] = React.useState({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        message: '',
        subscribe: false,
      });
    
      const [message, setMessage] = React.useState('');
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Simple form validation
        if (!formData.fullName || !formData.phoneNumber || !formData.emailAddress || !formData.message) {
          setMessage('All fields are required.');
          return;
        }
    
        // Your logic to handle form submission (e.g., sending data to a server)
        // ...
    
        // Display success message
        setMessage('Data has been saved successfully!');
        
          // Reset form data
    setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        message: '',
        subscribe: false,
      });
      setTimeout(() => {
        setMessage('');
      }, 2000);
      };
var sectionStyle = {
//   width: "100%",

  backgroundImage: `url(${Background})`
};
  return (
    <>
         {/* <!-- banner start --> */}
    <div className="banner-area banner-area-2" style={sectionStyle}>
        <div class="container">
            <div class="row">
                <div class=" align-self-center">
                    <div class="banner-inner style-white text-center text-lg-left">
                        <h3 class="b-animate-1 sub-title"> Empowering Veterans For Success</h3>
                        <h1 class="b-animate-2 title">FREE Training in-demand IT Skills</h1>
                        {/* <a class="btn btn-base b-animate-3 mr-sm-3 mr-2" href="#">Get A Quote</a> */}
                        {/* <a class="btn btn-border-white b-animate-3" href="blog.html">Read More</a> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- banner end -->   

    <!-- intro start --> */}
    <div class="intro-area intro-area--top" id="feature">
        <div class="container">
            <div class="intro-area-inner-2">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section-title text-center">
                            <h6 class="sub-title double-line">FEATURES</h6>
                            <h2 class="title">An exemplary <br/> learning community</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="single-intro-inner style-thumb text-center">
                            <div class="thumb">
                                <img src={f1} alt="img"/>
                            </div>
                            <div class="details">
                                <h5>Trainers With real-world experience</h5>
                                {/* <p>Lorem ipsum dolor</p> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-intro-inner style-thumb text-center">
                            <div class="thumb">
                                <img src={f3}alt="img"/>
                            </div>
                            <div class="details">
                                <h5>Acquire employable technology skills rapidly</h5>
                              
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-intro-inner style-thumb text-center">
                            <div class="thumb">
                                <img src={f2} alt="img"/>
                            </div>
                            <div class="details">
                                <h5>Distilled from years of real-world experience</h5>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="single-intro-inner style-thumb text-center">
                            <div class="thumb">
                                <img src={ff1} alt="img"/>
                            </div>
                            <div class="details">
                                <h5>Rapid Start Program</h5>
                                {/* <p>Lorem ipsum dolor</p> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-intro-inner style-thumb text-center">
                            <div class="thumb">
                                <img src={ff3} alt="img"/>
                            </div>
                            <div class="details">
                                <h5>Free Training</h5>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-intro-inner style-thumb text-center">
                            <div class="thumb">
                                <img src={f1} alt="img"/>
                            </div>
                            <div class="details">
                                <h5>Long term support after Placement</h5>
                                {/* <p>Lorem ipsum dolor</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="single-intro-inner style-thumb text-center">
                            <div class="thumb">
                                <img src={f3} alt="img"/>
                            </div>
                            <div class="details">
                                <h5>Real World project</h5>
                                {/* <p>Lorem ipsum dolor</p> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-intro-inner style-thumb text-center">
                            <div class="thumb">
                                <img src={ff4} alt="img"/>
                            </div>
                            <div class="details">
                                <h5>Resume and interview preparation support</h5>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-intro-inner style-thumb text-center">
                            <div class="thumb">
                                <img src={f2} alt="img"/>
                            </div>
                            <div class="details">
                                <h5>Placement Support</h5>
                               
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="intro-footer bg-base">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="single-list-inner">
                                <div class="media">
                                    <div class="media-left">
                                        <img src={f3}alt="img"/>
                                    </div>
                                    <div class="media-body align-self-center">
                                        <h5>Engineering</h5>
                                        <p>Lorem ipsum dolor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="single-list-inner">
                                <div class="media">
                                    <div class="media-left">
                                        <img src={f4} alt="img"/>
                                    </div>
                                    <div class="media-body align-self-center">
                                        <h5>PHD Scholarship</h5>
                                        <p>Lorem ipsum dolor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="single-list-inner">
                                <div class="media">
                                    <div class="media-left">
                                        <img src={f5} alt="img"/>
                                    </div>
                                    <div class="media-body align-self-center">
                                        <h5>Accounting</h5>
                                        <p>Lorem ipsum dolor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    {/* <!-- intro end --> */}
    <div class="about-area pd-top-120">
        <div class="container">
            <div class="about-area-inner">
                <div class="row">
                    <div class="col-lg-6 col-md-10">
                        <div class="about-thumb-wrap after-shape" style={sectionStyle}>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-inner-wrap">  
                            <div class="section-title mb-0">
                                {/* <h6 class="sub-title right-line">ABOUT US</h6> */}
                                <h2 class="title">Unlocking Opportunities For Software Careers</h2>
                                <p class="content">Veterans sacrifice a lot for our country.  It is our turn to show gratitude for their service by providing FREE training to veterans and their immediate families* in in-demand IT skills.  For veterans looking for their next adventure an IT career provides them a purposeful career path and make their transition to civilian life easier.</p>
                                {/* <div class="row">
                                    <div class="col-sm-6">
                                        <ul class="single-list-wrap">
                                            <li class="single-list-inner style-check-box">
                                                <i class="fa fa-check"></i> Metus interdum metus
                                            </li>
                                            <li class="single-list-inner style-check-box">
                                                <i class="fa fa-check"></i> Ligula cur maecenas
                                            </li>
                                            <li class="single-list-inner style-check-box">
                                                <i class="fa fa-check"></i> Fringilla nulla 
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-6">
                                        <ul class="single-list-wrap">
                                            <li class="single-list-inner style-check-box">
                                                <i class="fa fa-check"></i> Metus interdum metus
                                            </li>
                                            <li class="single-list-inner style-check-box">
                                                <i class="fa fa-check"></i> Ligula cur maecenas
                                            </li>
                                            <li class="single-list-inner style-check-box">
                                                <i class="fa fa-check"></i> Fringilla nulla 
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <a class="btn btn-border-black" href="about.html">Read More</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* 
    <!--contact-area start--> */}
    <div class="contact-area bg-overlay mt-200 pd-bottom-90" style={sectionStyle} id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <form class="contact-form-inner mt-mn-200 style-shadow" onSubmit={handleSubmit}>
                        <div class="section-title">
                            <h2 class="title">Connect with us</h2>
                            <p>We will be happy to answer your questions.</p>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="single-input-inner">
                                    <input type="text" placeholder="Full name" name='fullName' value={formData.fullName}
              onChange={handleChange}/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="single-input-inner">
                                    <input type="text" placeholder="Phone Number" name='phoneNumber' value={formData.phoneNumber}
              onChange={handleChange}/>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="single-input-inner">
                                    <input type="email" placeholder="Email Address" name='emailAddress'  value={formData.emailAddress}
              onChange={handleChange}/>
                                </div>
                            </div>
                            {/* <div class="col-md-6">
                                <div class="single-input-inner">
                                    <input type="text" placeholder="Subject"/>
                                </div>
                            </div> */}
                            <div class="col-12">
                                <div class="single-input-inner">
                                    <textarea placeholder="Your Message" name='message' value={formData.message}
              onChange={handleChange}></textarea>
                                </div>
                            </div>
                            <div className="col-12">
          <p className='text-danger'>{message}</p>
        </div>
                            <div class="col-sm-6 align-self-center">
                                <div class="single-input-inner style-checkbox">
                                    <input type="checkbox"  value={formData.subscribe}
              onChange={handleChange}/>
                                    Also subscribe us
                                </div>
                            </div>
           
                            <div class="col-sm-6 text-sm-right">
                            <button type="submit" className="btn btn-base">
            Send Message
          </button>
                            </div>
                        </div>
                       
        
       
     
                    </form>
                </div>
                <div class="col-lg-4 align-self-end">
                    <div class="mt-5 mt-lg-0">
                        <ul class="single-list-wrap">
                            <li class="single-list-inner style-white style-check-box-grid-2">
                                <div class="media">
                                    <div class="media-left">
                                        <img src={f6} alt="img"/>
                                    </div>
                                    <div class="media-body align-self-center">
                                        <h5>Our Address</h5>
                                        <p>8750 Perimeter Park Blvd Jacksonville,</p>
                                        <p> FL, 32216</p>
                                    </div>
                                </div>
                            </li>
                           
                            <li class="single-list-inner style-white style-check-box-grid-2">
                                <div class="media">
                                    <div class="media-left">
                                        <img src={f8} alt="img"/>
                                    </div>
                                    <div class="media-body align-self-center">
                                        <h5>Our Email</h5>
                                        
                                        <p>info@nuevapro.net</p>
                                    </div>
                                </div>
                            </li>
                             {/* <li class="single-list-inner style-white style-check-box-grid-2">
                                <div class="media">
                                    <div class="media-left">
                                        <img src={f7}alt="img"/>
                                    </div>
                                    <div class="media-body align-self-center">
                                        <h5>Our Phone</h5>
                                        <p>+0029129102320</p>
                                        <p>+000 2324 39493</p>
                                    </div>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--contact-area end--> */}








    </>
  )
}

export default LandingPage