import './about.css'
import React from 'react';
import Footer from '../footer/Footer';



const About  = () =>{
  return (<>
    <div>
   
      <div className="" >
  <div className=" ">
    <div className='t '>
    <h1 className='text-center ' >About Us</h1>

    <p className="about text-center">
  

   The FastLaneSalon was created in MArch 2022 in a little shop at Islamabad.
       we believe in giving our customers the best quality products quickly and affordably!
       we offer high quality products at a affordable price. 
     </p>
   
    <p id="customerPhrase"className='text-center'><span ><em> Our customer satisfaction is our #1 priority..</em></span>
    

    </p>
    <p className='text-center'>We are proud of our interiors.</p>
    <img className="r" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoL5VW1Vq-r9Xsx2XiL4XzcIkwEOdf3RztyQ&usqp=CAU" alt="Restaurant"/>
    <div className='s1'>
    <h1 style={{border:"2px solid yellow"}}>Opening Hours</h1>
    
        <p>Monday 9am - 9pm</p>
        <p>Tuesday 9am - 9pm</p>
        <p>Wednesday 9am - 9pm</p>
        <p>Thurday 9am - 9pm</p>
        
        <p>Sunday  9am - 9pm</p>
        <p>Saturday  9am - 9pm</p>
        <p>Friday Closed </p>
        </div>
      </div>
  </div>
</div>
</div>





<Footer/>


    </>
  );
}
export default About;