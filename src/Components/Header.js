import { Link } from 'react-scroll';
import "./common.css"
const styles = {
    orange: {
      color: 'orangered',
    },
  };
export default function Header(){
   
    return<>
   <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-dark" >
  <div className="container-fluid">
    <Link className="navbar-brand ps-5 " style={styles.orange} href="#"><i>bhanu bediya</i></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
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