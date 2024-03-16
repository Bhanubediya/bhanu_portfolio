import image from "../Assets/herologo1.png";
import "./common.css";
import "../App.css";
import { ReactTyped } from "react-typed";
import Skills from "./Skills";
import resume from "../Assets/bhanubediya-resume.pdf";
import WorkExperience from "./WorkExperience";
import About from "./About";
export default function Home() {
  return (
    <>
      <div className="container" style={{ paddingTop: "5em" }}>
        <div className="row">
        <section id="home">
          <div className="d-flex pb-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="intro" data-aos="fade-right">
                <div className="introHeading">
                  <h2>Hello It's Me </h2>
                  <h1>
                    <strong className="text-orange">Bhanu Bediya</strong>{" "}
                  </h1>
                  <h3>
                    And I'm a{" "}
                    <span className="text-orange">
                      <strong>
                        {" "}
                        <ReactTyped
                          strings={[
                            "Software Developer",
                            "Software Engineer",
                            "Front-End Developer.",
                            "Back-End Developer.",
                            "Web Developer.",
                          ]}
                          typeSpeed={40}
                          backSpeed={30}
                          loop
                        />
                      </strong>
                    </span>
                  </h3>
                  <div></div>
                </div>
                <div className="introPara">
                  <p className="word-break">
                  An experienced developer with a creative mindset, strong teamwork, and exceptional problem-solving skills. Passionate about continuous improvement, actively engaged in honing problem-solving abilities through challenges like LeetCode. Dedicated to making meaningful contributions in the world of Full Stack Development.
                  </p>
                </div>
                <div className="text-center">
                  <a
                    href={resume}
                    download="bhanubediya-resume"
                    className="btn"
                    style={{
                      color: "white",
                      border: "2px #90d8ff solid",
                      backgroundColor: "rgb(4 196 255)",
                    }}
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12" >
              <div
                className="text-center"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <img src={image} className="heroImg" alt="" />
              </div>
            </div>
          </div>
          </section>
          {/* About section */}
          <section id="about">
          <About />
          </section>
          {/* skills section */}
          <section id="skills">
          <h2 className="text-center text-orange pb-4 pt-5">
            Languages and Frameworks
          </h2>
          <Skills />
          </section>
          {/* WorkExperience section */}
          <section id="work">
          <h2 className="text-center text-orange pt-5 pb-3">Work Experience</h2>
          <WorkExperience />
          </section>
        </div>
      </div>
    </>
  );
}
