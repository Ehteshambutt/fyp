
import './contact.css'
import Footer from './../../components/footer/Footer';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () =>{
  const form = useRef();


  const submitHandler=(event)=>{
    event.preventDefault();
    event.target.reset();
    emailjs.sendForm('service_p7ufmfq', 'template_i05dkbp', form.current, '2HtYzoCIYRqMYFW2P')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    
event.preventDefault();
  }
  return (<>
    <div className=' y '>
   
     
      <div className="container">
  <div className='text-center'>
    <h2>Contact Us</h2>
    <div className=' b'>
    <p > We offer a full Saloonic service  for any event, large or small. We understand your needs and we will fulfill it to satisfy the biggerst criteria of them all.</p>
    <p className="w3-xxlarge "><strong>Reserve</strong> a seat, ask for today's special or just send us a message:</p>
  </div></div>
  <div className="row">
    <div className="column">
      <img src="./images/cl.png" alt="img"/>
    </div>
    <div className="column">
<form onSubmit={submitHandler}   ref={form}  className="col g-3 needs-validation" >
<label htmlFor="validationCustom01" className="form-label">Name </label>

<input type="text" className="form-control"id="validationCustom01" placeholder="Name"
name="user_name" aria-label="Name" required/>
 

  

  
  <label htmlFor="exampleInputEmail1" className="form-label ">Email address</label>
    <input type="email" className="form-control" name="user_email"  id="exampleInputEmail1" aria-describedby="emailHelp" required/>

        <label htmlFor="validationCustom05"   >Message</label>
        <textarea id="validationCustom05" name="Message"  className='form-control' placeholder="Write your message" style={{height:"170px"}}  required></textarea>
      

 
  
  <div className="col-12">
    <button className="btn btn-primary" value="Send" type="submit">Submit </button>
  </div>
</form>
</div>



  </div>
  </div>
    </div>
    <Footer/>
    </>
  );
}
export default Contact;