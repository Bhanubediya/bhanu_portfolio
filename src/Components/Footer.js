import { Link } from "react-scroll";

export default function Footer(){
    return<>

<footer className=" text-center" style={{borderTop:"2px rgb(255, 111, 0) solid"}}>
  <div className="container p-4">
    <section className="mb-4">
      <Link  className="btn btn-outline btn-floating m-1 text-white" to="#" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></Link>
      <Link  className="btn btn-outline btn-floating m-1 text-white" to="#" role="button"
        ><i className="fab fa-github"></i
      ></Link>
    </section>


  

  </div>



  <div className="text-center p-3" style={{backgroundColor: "rgb(255, 111, 0)"}}>

  </div>

</footer>

         </>
}