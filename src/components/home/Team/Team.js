import './team.css'
import React,{useEffect} from 'react'
import Aos from 'aos'
export default function Team() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <><section className="text-gray-600 body-font"  >
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20" >
        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">OUR BIGGEST ASSET.</p>

        
    <div><div className="card-group "data-aos="fade-up" >
    <div className="card m-5 ">
      <img src="./images/t1.jpg" className="card-img-top rounded p" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Mr.Maaz</h5>
        
        <p className="card-text">Hair clipper Comb Hairstyle Barber Hairdresser.</p>
        <p className="card-text"><small className="text-muted">Barber</small></p>
      </div>
    </div>
    <div className="card m-5" data-aos="fade-up">
      <img src="./images/v.png" className="card-img-top rounded p" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Mr.ALi</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p className="card-text"><small className="text-muted">Trimmer</small></p>
      </div>
    </div>
    <div className="card m-5 "data-aos="fade-up">
      <img src="./images/t4.jpg" className="card-img-top rounded p" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Mr.Zain</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p className="card-text"><small className="text-muted">Facial Expert</small></p>
      </div>      </div>

  </div></div>
  

      </div>
      </div>
  </section></>
  )
}
