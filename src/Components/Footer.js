import src from "../Assets/leetcode-svgrepo-com.svg";
import "../Styles/common.css";
export default function Footer(){
    return<>

<footer className=" text-center" style={{borderTop:"2px #282f32 solid"}}>
  <div className="container p-4">
    <section className="social-icons mb-1"  data-aos="zoom-in">
      <a target="_blank" className="btn btn-outline btn-floating m-1 text-white" href="https://www.linkedin.com/in/bhanu-bediya-161240157/" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>
      <a target="_blank" className="btn btn-outline btn-floating m-1 text-white" href="https://github.com/Bhanubediya" role="button"
        ><i className="fab fa-github"></i
      ></a>
      <a target="_blank" className="btn btn-outline btn-floating m-1 text-white" href="mailto:bhanubediya@gmail.com" role="button"
        ><i className="fa fa-envelope"></i
      ></a>
      <a target="_blank"  className="btn btn-outline btn-floating m-1 text-white" href="https://leetcode.com/Bhanubediya/" role="button"
        ><img src={src} width={14} className="pad-b-1" alt="" /></a>
    </section>


  

  </div>



  <div className="text-center p-3" style={{backgroundColor: "#282f32"}}>
  <p className="text-center foot-mail">Contact me - <strong>bhanubediya@gmail.com</strong></p>
  </div>

</footer>

         </>
}