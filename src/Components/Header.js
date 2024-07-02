import { Link } from 'react-scroll';
import "../Styles/common.css";
import { useState } from 'react';
const styles = {
    orange: {
      color: 'rgb(4 196 255)',
    },
  };

export default function Header(){
    const[toggle,setToggle]=useState(false);
    const handleToggle=(ele)=>{
     setToggle(ele);
    }
    return<>
   <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" >
  <div className="container-fluid">
    <Link className="navbar-brand " style={{display:"flex",color:"rgb(4 196 255)"}} to="home">
      {/* <img  width={32} height={17} src={image} alt="" /> */}
      <strong className=''  data-aos="fade-down" style={{cursor:"pointer",fontSize:"1rem",paddingBottom:"0px!important",fontFamily:"monospace"}}>	<span className='text-white'>&#123;</span>bhanu<span className='text-white'>:</span>bediya<span className='text-white'>&#125;</span></strong>
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      {!toggle&&<span className="navbar-toggler-icon-menu" onClick={()=>{handleToggle(true)}}> </span>}
      {toggle&&<span className="navbar-toggler-icon-cancel"  onClick={()=>{handleToggle(false)}}></span>}
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-lg-12 justify-content-end">
        <li className="nav-item col-lg-2">
          <Link className="nav-link " smooth spy activeClass="active"  to="home">Home</Link>
        </li>
        <li className="nav-item col-lg-2">
          <Link className="nav-link" smooth spy activeClass="active" to="about">About</Link>
        </li>
        {/* <li className="nav-item col-lg-2">
          <Link className="nav-link" smooth spy activeClass="active"  to="skills" >Skills</Link>
        </li> */}
        <li className="nav-item col-lg-2">
          <Link className="nav-link" smooth spy activeClass="active"  to="work" >Experience</Link>
        </li>
        <li className="nav-item col-lg-2">
          <Link className="nav-link" smooth spy activeClass="active"  to="testimonial" >Testimonial</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
            
         </>
        
}