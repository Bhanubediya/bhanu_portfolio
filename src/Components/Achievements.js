import ratingImg from "../Assets/rating.jpeg";
import solvedImg from "../Assets/solvedquestions.jpeg";
export default function Achievements(){
    return<div >
    <div className="d-flex justify-content-between flex-wrap pb-5 align-items-center" >
    <div className="col-11 col-md-5 col-lg-5 text-center" data-aos="fade-right" data-aos-duration="800">
        <img src={ratingImg} className="col-md-11 col-12 col-lg-12"  alt="Rating" />
    </div>
    <div className="col-11 col-md-6 col-lg-6 pt-3 text-center" data-aos="fade-left" data-aos-duration="800">
       <h5 className=" text-wrap ">Ranked in the Top 32% Globally on LeetCode Contests!</h5>
    </div>
    </div>
    <div className="d-flex justify-content-between flex-wrap align-items-center">
    <div className="col-11 col-md-6 col-lg-6 " data-aos="fade-right" data-aos-duration="800">
    <h5 className="fw-bold text-wrap">500+ LeetCode Problems Solved!</h5>
     <p className=" text-wrap">I’ve solved over 500 LeetCode problems, enhancing my problem-solving skills and algorithmic knowledge. This achievement has improved my coding abilities and prepared me for technical challenges, laying a strong foundation for future projects in the tech industry.</p>
    </div>
    <div className="col-11 col-md-5 col-lg-5 text-center" data-aos="fade-left" data-aos-duration="800">
    <img src={solvedImg}  className="col-md-11 col-12 col-lg-12"  alt="Rating" />
    </div>
    </div>
    </div>
}