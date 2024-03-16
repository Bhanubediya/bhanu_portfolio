import { Link } from 'react-scroll';
import "./common.css"
import { useState } from 'react';
import image from "../Assets/mug-coffee-svgrepo-com.svg";
const styles = {
    orange: {
      color: 'rgb(255, 125, 4)',
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
    <Link className="navbar-brand " style={{display:"flex",color:"rgb(4 218 255)"}} href="#">
      <img  width={32} height={17} src={image} alt="" />
      <h3 className='' style={{fontSize:"0.9rem",fontFamily:"cursive"}}><i>bhanu-bediya</i></h3>
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
        <li className="nav-item col-lg-2">
          <Link className="nav-link" smooth spy activeClass="active"  to="skills" >Skills</Link>
        </li>
        <li className="nav-item col-lg-2">
          <Link className="nav-link" smooth spy activeClass="active"  to="work" >Experience</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
            
         </>
        
}