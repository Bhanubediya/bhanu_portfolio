import image from "../Assets/Cross-platform software-pana.svg";
import "./common.css"
export default function About(){
    return<>
    <div className="d-flex justify-content-between about-section">
        <div className="col-lg-4 col-md-6 col-sm-12 ">
        <img src={image} alt="" />
        </div>
        <div className="col-lg-7 col-md-6 col-sm-12 pt-5">
           <div className="text-center">
           <p>Experienced <span className="text-orange">software engineer</span> with a 2 year track record in frontend and backend development. Proficient in crafting robust web applications, leveraging a diverse toolkit of technologies. I excel in delivering seamless user experiences. With a keen eye for detail and a passion for problem-solving, I thrive in dynamic environments where I can contribute to innovative projects. Committed to continuous learning and staying updated with the latest industry trends, I am dedicated to delivering high-quality solutions that exceed expectations.</p>
           </div>
        </div>
    </div>
         </>
}