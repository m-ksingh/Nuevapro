import React from 'react'
import abc from "../../assets/img/fulllogo_transparent_nobuffer.png"
export const Footer = () => {
  return (
    <>
    
{/* <footer class="footer-area bg-gray">
    <div class="footer-top">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 ">
                   
                       
                            <a href="/"><img src={abc} alt="img" style={{mixBlendMode: "multiply"}}/></a>
                       
                      
                   
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="widget widget_nav_menu">
                        <h4 class="widget-title">Company</h4>
                        <ul>
                            <li>
                                <a href="/">Solutions</a>
                                
                            </li>
                            <li>
                                <a href="/blogs">Blogs</a>
                                
                            </li>
                            <li  >
                                <a href="/event">Webinars</a>
                            
                            </li>
                            <li><a href="/veteran">Veteran Services</a></li>


                        <li><a href="/contact">Contact Us</a></li>
                           
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="widget widget_contact">
                        <h4 class="widget-title">Contact Us</h4>
                        <ul class="details">
                            <h6 > Learnlytica LLC</h6>
                            <li><i class="fa fa-map-marker"></i> USA (NC, FL), INDIA
                               </li>
                            <li><i class="fa fa-envelope"></i>training@learnlytica.com</li>
                           
                        </ul>
                     
                    </div>
                </div> 
               
                <div class="col-lg-3 col-md-6">
                    <div class="widget widget_contact">
                        <h4 class="widget-title"><a href="Faq">FAQ</a></h4>
                      
                    </div>
                </div>
            </div>
</div>
</div>

</footer> */}

<footer class="footer-area bg-gray">
      
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 align-self-center">
                     <a href="#!"><img src={abc} alt="img"/></a>
                    </div>
                    <div class="col-lg-4  col-md-6 order-lg-12 text-md-right align-self-center">
                        <ul class="social-media mt-md-0 mt-3">
                            <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a class="instagram" href="#"><i class="fa fa-instagram"></i></a></li>
                            <li><a class="youtube" href="#"><i class="fa fa-youtube"></i></a></li>
                            <li><a class="pinterest" href="#"><i class="fa fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 order-lg-8 text-lg-center align-self-center mt-lg-0 mt-3">
                        <p>copyright 2023 by Nuevapro</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
   
 
    
    </>
  )
}
