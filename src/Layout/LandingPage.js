import React,{useState} from 'react'

import f1 from "../assets/img/intro/4.png"
import f2 from "../assets/img/intro/6.png"
import f3 from "../assets/img/intro/5.png"
import ff1 from "../assets/img/intro/f1.jpg"
import ff2 from "../assets/img/intro/f2.png"
import ff3 from "../assets/img/intro/f3.jpg"
import ff4 from "../assets/img/intro/f4.png"
import longtermsupport from "../assets/img/intro/f4.png"
import f4 from "../assets/img/icon/20.png"
import f5 from "../assets/img/icon/21.png"
import f6 from "../assets/img/icon/16.png" 
import f7 from "../assets/img/icon/17.png"                    

import f8 from "../assets/img/icon/18.png" 
import cs from "../assets/img/icon/cyber-security.png" 
import ca from "../assets/img/icon/clound-computing.png" 
import da from "../assets/img/icon/Big-Data.png" 
import devops from "../assets/img/icon/devops.png"                    

import Background from '../assets/img/intro/veteran.png';
const LandingPage = () => {
    const [showContent, setShowContent] = useState(false);
    const [showContentcloud, setShowContentcloud] = useState(false);
    const [showContentdata, setShowContentdata] = useState(false);
    const [showContentdevops, setShowContentdevops] = useState(false);

    const toggleContent = () => {
      setShowContent(!showContent);
    };
    const toggleContentcloud = () => {
        setShowContentcloud(!showContentcloud);
      };
      const toggleContentdata = () => {
        setShowContentdata(!showContentdata);
      };
      const toggleContentdevops = () => {
        setShowContentdevops(!showContentdevops);
      };
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
                        <h2 class="b-animate-1 sub-title"> Empowering Veterans For Success</h2>
                        <h1 class="b-animate-2 title">FREE Training in-demand IT Skills</h1>
                        <a class="btn btn-primary b-animate-3 mr-sm-3 mr-2" href="#contact" style={{background:"rgb(20,20,132)"}}>Learn More</a>
                       
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
                <div class="row px-2">
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
                <div class="row px-2">
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
                                <img src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?w=740&t=st=1696567047~exp=1696567647~hmac=1a84231452603042128b24c7044645674280c7541cc0ede27814c8880a2c1a76" height="200px" alt="img"/>
                            </div>
                            <div class="details">
                                <h5>Long term support after Placement</h5>
                                {/* <p>Lorem ipsum dolor</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row px-2">
                    <div class="col-md-4">
                        <div class="single-intro-inner style-thumb text-center">
                            <div class="thumb">
                                <img src="https://img.freepik.com/free-vector/real-estate-searching-illustration-with-phone-magnifier_23-2148655253.jpg?size=626&ext=jpg&ga=GA1.1.1406700243.1687936719&semt=ais" alt="img"/>
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
                                <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=626&ext=jpg&ga=GA1.2.1406700243.1687936719&semt=sph" alt="img"/>
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



    <div class="work-area pd-top-110">
        <div class="container">
            <div class="section-title">
               
                    <div class="text-center">
                       
                        <h2 class="title">Available Career Paths</h2>
                    </div>
                  
            </div>
            {/* <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="single-intro-inner style-icon-bg bg-gray text-center">
                        <div class="thumb">
                            <img src="assets/img/icon/12.png" alt="img"/>
                            <div class="intro-count">1</div>
                        </div>
                        <div class="details">
                            <h5>CLOUD ARCHITECT</h5>
                            <p className='content'> cloud architect is an IT professional who is responsible for overseeing a company's cloud
computing strategy. This includes cloud adoption plans, cloud application design,
and cloud management and monitoring.</p>
                            <a class="read-more-text" href="signup.html">Read More <i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single-intro-inner style-icon-bg bg-gray text-center">
                        <div class="thumb">
                            <img src="assets/img/icon/13.png" alt="img"/>
                            <div class="intro-count">2</div>
                        </div>
                        <div class="details">
                            <h5>CYBERSECURITY ANALYST</h5>
                            <p className='content'>Cyber Security refers to a set of techniques used to protect systems, network and data from cyber-attacks.
It aims at ensuring a system’s integrity and condentiality of information.</p>
                            <a class="read-more-text" href="course.html">Read More <i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single-intro-inner style-icon-bg bg-gray text-center">
                        <div class="thumb">
                            <img src="assets/img/icon/14.png" alt="img"/>
                            <div class="intro-count">3</div>
                        </div>
                        <div class="details">
                            <h5>DATA ENGINEER & BI ANALYST</h5>
                            <p className='content'>Derives insight from data. Such a person proactively fetches information from various sources and
analyzes it for better understanding about how the business performs, and to build AI tools 
that automate certain processes within the company</p>
                            <a class="read-more-text" href="course-details.html">Read More <i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single-intro-inner style-icon-bg bg-gray text-center">
                        <div class="thumb">
                            <img src="assets/img/icon/15.png" alt="img"/>
                            <div class="intro-count">4</div>
                        </div>
                        <div class="details">
                            <h5>DEVOPS ENGINEER</h5>
                            <p className='content'>DevOps Engineer works with developers and the IT sta to oversee the code releases. They improve
the planning of test and deployment and transition code from development to production deployment.</p>
                            <a class="read-more-text" href="blog-details.html">Read More <i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div> */}
             <div class="row ">
             <div class="col-md-6">
                    <div class="single-testimonial-inner m-0">
                        <div class="media testimonial-author mb-4">
                            <div class="media-left">
                                <img src={cs} alt="img" height="35px" width="35px"/>
                                {/* <i class="fa fa-quote-left"></i> */}
                            </div>
                            <div class="media-body align-self-center">
                                <h5>CYBERSECURITY ANALYST</h5>
                                {/* <p>Tincidunt</p> */}
                            </div>
                        </div>
                        {/* <span class="testimonial-quote"><i class="fa fa-quote-left"></i></span> */}
                        <p class="mb-0 content">
                        Cyber Security refers to a set of techniques used to protect systems, network and data from cyber-attacks.
It aims at ensuring a system’s integrity and confidentiality of information.
There are many kinds of cyber-attacks such as malware, phishing, unpatched software, hijacking files, 
hacking and identity theft, to name a few.
Cyber Security training and certification courses make you well versed with the processes and practices
followed for protecting networks and data from unauthorized attacks. The course enables you to detect 
vulnerabilities of a system, ward off attacks and manage emergency situations.
                            </p>
                            <h6 className='mt-4'>CONTENT COVERAGE</h6>  
                        <div class="row pt-4">
                      
                                            <ul class="single-list-wrap">
                                                <li class="single-list-inner style-check-box">
                                                    Various types of footprinting, footprinting tools, and countermeasurese
                                                </li>
                                                <li class="single-list-inner style-check-box">
                                                   Network scanning techniques and scanning countermeasures
                                                </li>
                                                <li class="single-list-inner style-check-box">
                                                  System hacking methodology, steganography, steganalysis attacks,
 and covering tracks
                                                </li>
                                                {/* <button className='btn btn-primary'style={{background:"rgb(20,20,132)"}} onClick={toggleContent}>
        {showContent ? 'Hide ' : 'Show More'}
      </button> */}

      {showContent ?"":<button className='btn btn-primary'style={{background:"rgb(20,20,132)"}} onClick={toggleContent}>
      Show More
      </button> }

      {showContent && (
                                               <> <li class="single-list-inner style-check-box">
                                                Different types of Trojans, Trojan analysis, and Trojan countermeasures
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                              Working with viruses, virus analysis, computer worms,malware analysis procedure, and countermeasures
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                              DoS/DDoS attack techniques, botnets, DDoS attack tools,
 and DoS/DDoS countermeasures
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                            Different types of web server & web application attacks
                                           </li>
                                          
                                       
                                           <li class="single-list-inner style-check-box">
                                               SQL injection attacks & Wireless Encryption
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                              Mobile platform attack vector & Android vulnerabilities
                                           </li>
                                         </>
)}
                                               
                                            </ul>
                                        
                                    </div>
                                    {showContent && (
        <button className='btn btn-primary mt-2' style={{ background: "rgb(20,20,132)" }} onClick={toggleContent}>
          Show less
        </button>
      )}
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="single-testimonial-inner m-0">
                        <div class="media testimonial-author mb-4">
                            <div class="media-left">
                                <img src={ca} alt="img"/>
                                {/* <i class="fa fa-quote-left"></i> */}
                            </div>
                            <div class="media-body align-self-center">
                                <h5>CLOUD ARCHITECT</h5>
                                {/* <p>Tincidunt</p> */}
                            </div>
                        </div>
                        {/* <span class="testimonial-quote"><i class="fa fa-quote-left"></i></span> */}
                        <p class="mb-0 content">
                        Cloud architect is an IT professional who is responsible for overseeing a company's cloud
computing strategy. This includes cloud adoption plans, cloud application design,
and cloud management and monitoring.
Cloud architects oversee application architecture and deployment in 
cloud environments -- including public cloud, private cloud and hybrid cloud. 
Additionally, cloud architects act as consultants to their organization and need to stay up-to-date 
on the latest trends and issues.
                            </p>
                            <h6 className='mt-4'>CONTENT COVERAGE</h6>  
                        <div class="row pt-4">
                                        
                                            <ul class="single-list-wrap">
                                                <li class="single-list-inner style-check-box">
                                                  Core cloud knowledge with focus on AWS and Azure
                                                </li>
                                                <li class="single-list-inner style-check-box">
                                                    Designing your environment
                                                </li>
                                                <li class="single-list-inner style-check-box">
                                                    Making your environment highly available
                                                </li>
                                                <li class="single-list-inner style-check-box">
                                              Forklifting an existing application onto AWS and Azure
                                           </li>
                                           <li class="single-list-inner style-check-box mb-4">
                                               Event-Driven scaling
                                           </li>
                                           
                                           {showContentcloud ?'': <button className='btn btn-primary mt-2'style={{background:"rgb(20,20,132)"}} onClick={toggleContentcloud}>
      Show more
      </button> 
}

      {showContentcloud && (
                                               <> 
                                           <li class="single-list-inner style-check-box">
                                              Automating and decoupling your infrastructure
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                              Designing storage at scale
                                           </li>
                                          
                                       
                                           <li class="single-list-inner style-check-box">
                                                Hosting a new web application on AWS and Azure
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                               The four pillars of the well-architected framework
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                              Disaster recovery and failover strategies
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                              Troubleshooting your environment
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                                Large-scale design patterns and case studies
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                              Serverless architecture
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                             Load balancing techniques on cloud
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                               Disaster recovery
                                           </li></>
)}
                                               
                                            </ul>
                                        
                                    </div>
                   
                                    {showContentcloud && (
        <button className='btn btn-primary mt-2' style={{ background: "rgb(20,20,132)" }} onClick={toggleContentcloud}>
          Show less
        </button>
      )}
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                    </div>
                </div>
            </div>
            <div class="row mt-5">
             <div class="col-md-6">
                    <div class="single-testimonial-inner m-0">
                        <div class="media testimonial-author mb-4">
                            <div class="media-left">
                                <img src={da} alt="img"/>
                                {/* <i class="fa fa-quote-left"></i> */}
                            </div>
                            <div class="media-body align-self-center">
                                <h5>DATA ENGINEER & BI ANALYST</h5>
                                {/* <p>Tincidunt</p> */}
                            </div>
                        </div>
                        {/* <span class="testimonial-quote"><i class="fa fa-quote-left"></i></span> */}
                        <p class="mb-0 content">
                        Derives insight from data. Such a person proactively fetches information from various sources and
analyzes it for better understanding about how the business performs, and to build AI tools 
that automate certain processes within the company
                            </p>
                            <h6 className='mt-4'>CONTENT COVERAGE</h6>  
                        <div class="row pt-4 mt-2">
                                        
                                            <ul class="single-list-wrap">
                                                <li class="single-list-inner style-check-box">
                                                   Selecting features, building and optimizing classifiers using machine learning techniques 
                                                </li>
                                                <li class="single-list-inner style-check-box">
                                                   Data mining using state-of-the-art methods 
                                                </li>
                                                <li class="single-list-inner style-check-box mb-5">
                                                   Extending company’s data with third party sources of information when needed ,
 and covering tracks
                                                </li>
                                                {showContentdata ?'': <button className='btn btn-primary mt-2'style={{background:"rgb(20,20,132)"}} onClick={toggleContentdata}>
      Show more
      </button> 
}

      {showContentdata && (
                                               <> <li class="single-list-inner style-check-box">
                                              Enhancing data collection procedures to include information that is relevant for
 building analytic systems
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                               Processing, cleansing, and verifying the integrity of data used for analysis 
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                              Doing ad-hoc analysis and presenting results in a clear manner 
 and DoS/DDoS countermeasures
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                               Creating automated anomaly detection systems and constant tracking of its performance
                                           </li>
                                          
                                       
                                           <li class="single-list-inner style-check-box">
                                               Planning ingest layer and connector framework identification
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                              Transformation and data wrangling
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                              Data Exploration and visualization using PowerBI and Tableau
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                              Cloud and data analytics
                                           </li>
                                         </>
)}
                                               
                                            </ul>
                                        
                                    </div>
  
                                    {showContentdata && (
        <button className='btn btn-primary mt-2' style={{ background: "rgb(20,20,132)" }} onClick={toggleContentdata}>
          Show less
        </button>
      )}
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="single-testimonial-inner m-0">
                        <div class="media testimonial-author mb-4">
                            <div class="media-left">
                                <img src={devops} alt="img"/>
                                {/* <i class="fa fa-quote-left"></i> */}
                            </div>
                            <div class="media-body align-self-center">
                                <h5>DEVOPS ENGINEER</h5>
                                {/* <p>Tincidunt</p> */}
                            </div>
                        </div>
                        {/* <span class="testimonial-quote"><i class="fa fa-quote-left"></i></span> */}
                        <p class="mb-0 content">
                        DevOps Engineer works with developers and the IT staff to oversee the code releases. They improve
the planning of test and deployment and transition code from development to production deployment.
                            </p>
                            <h6 className='mt-4'>CONTENT COVERAGE</h6>  
                        <div class="row pt-4 mt-2">
                                        
                                            <ul class="single-list-wrap">
                                                <li class="single-list-inner style-check-box">
                                                    Introduction to DevOps & its significance in software development
                                                </li>
                                                <li class="single-list-inner style-check-box">
                                                   Different software development methodologies & their significance
                                                </li>
                                                <li class="single-list-inner style-check-box">
                                                    Introduction to virtualization, types of server virtualization & virtualization products
                                                </li>
               


      {showContentdevops ?'': <button className='btn btn-primary mt-2'style={{background:"rgb(20,20,132)"}} onClick={toggleContentdevops}>
      Show more
      </button> 
}

      {showContentdevops && (
                                               <> <li class="single-list-inner style-check-box">
                                               Installation & configuration of vagrant
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                              Version control systems & installing GIT on Windows & Linux
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                                Dockers & containerization
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                               Configuration management with Chef, SaltStack, Puppet and Ansible
                                           </li>
                                          
                                       
                                           <li class="single-list-inner style-check-box">
                                              Monitoring with Nagios application
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                              Continuous integration using Jenkins
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                              Container clustering with Docker Swarm and Kubernetes
                                           </li>
                                           <li class="single-list-inner style-check-box">
                                              CI/CD Pipeline Automation
                                           </li>
                                        </>
)}
                                               
                                            </ul>
                                        
                                    </div>
                                    {showContentdevops && (
        <button className='btn btn-primary mt-2' style={{ background: "rgb(20,20,132)" }} onClick={toggleContentdevops}>
          Show less
        </button>
      )}
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                    </div>
                </div>
            </div>
        </div>
    </div>

















{/* 
    <!--contact-area start--> */}
    <div class="contact-area bg-overlay mt-200 pd-bottom-90"  id="contact">
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
                            <button type="submit" className="btn btn-primary">
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
                                    <div class="media-left" style={{background:"#FFDE59"}}>
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
                                    <div class="media-left" style={{background:"#FFDE59"}}>
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