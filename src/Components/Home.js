import image from "../Assets/herologo1.png";
import "../Styles/common.css";
import "../Styles/App.css";
import "../Styles/Home.css";
import { ReactTyped } from "react-typed";
import resume from "../Assets/Bhanu_Bediya_SDE_Resume.pdf";
import WorkExperience from "./WorkExperience";
import About from "./About";
import src from "../Assets/leetcode-svgrepo-com.svg";
import { useState } from "react";
import Testimonial from "./Testimonial";

export default function Home() {
  const [downloadStatus, setDownloadStatus] = useState("Download Resume");
  const handleDownload = () => {
    setDownloadStatus("Downloading...");

    // Reset the download status after 3 seconds
    setTimeout(() => {
      setDownloadStatus("Download Resume");
    }, 2000);
  };
  return (
    <>
      <section id="home">
        <div className="homesection" >
          {/* decorative animated cubes background (visual only) */}
          <div className="cube-bg" aria-hidden="true">
            <i className="cube" />
            <i className="cube" />
            <i className="cube" />
            <i className="cube" />
            <i className="cube" />
            <i className="cube" />
            <i className="cube" />
            <i className="cube" />
            <i className="cube" />
            <i className="cube" />
            <i className="cube" />
            <i className="cube" />
          </div>
          <div className="container">
            <div className="d-flex pb-5 pt-5">
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
                              "Software Developer.",
                              "Software Engineer.",
                              "Full Stack Developer.",
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
                      An experienced developer with a creative mindset, strong
                      teamwork, and exceptional problem-solving skills.
                      Passionate about continuous improvement, actively engaged
                      in honing problem-solving abilities through challenges
                      like LeetCode. Dedicated to making meaningful
                      contributions in the world of Full Stack Development.
                    </p>
                  </div>
                  <div className="text-center ">
                    <a href={resume} download="Bhanu_Bediya_SDE_Resume">
                      <button
                        onClick={() => {
                          handleDownload();
                        }}
                        className="btn resume-download"
                      >
                        {downloadStatus}
                      </button>
                    </a>
                    <section className="mb-1 social-icons">
                      <abbr title="linked in">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn (opens in new tab)"
                          className="btn btn-outline btn-floating m-1 text-white"
                          href="https://www.linkedin.com/in/bhanu-bediya-161240157/"
                          role="button"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </abbr>
                      <abbr title="github">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub (opens in new tab)"
                          className="btn btn-outline btn-floating m-1 text-white"
                          href="https://github.com/Bhanubediya"
                          role="button"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      </abbr>
                      <abbr title="e-mail">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Send email"
                          className="btn btn-outline btn-floating m-1 text-white"
                          href="mailto:bhanu.d.bediya@gmail.com"
                          role="button"
                        >
                          <i className="fa fa-envelope"></i>
                        </a>
                      </abbr>
                      <abbr title="leetcode">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LeetCode profile (opens in new tab)"
                          className="btn btn-outline btn-floating m-1 text-white"
                          href="https://leetcode.com/Bhanubediya/"
                          role="button"
                        >
                          <img
                            src={src}
                            width={14}
                            className="pad-b-1"
                            alt="LeetCode logo"
                          />
                        </a>
                      </abbr>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container" style={{ paddingTop: "4em" }}>
        <div className="row">
          <section className="pt-5" id="about">
            <About />
          </section>
          <section id="work">
            <h2 className="text-center text-orange pt-5 pb-3">
              Work Experience
            </h2>
            <WorkExperience />
          </section>
          <section id="testimonial">
          <h2 className="text-center text-orange pt-5 pb-3">
             Testimonials
            </h2>
            <Testimonial/>
          </section>
        </div>
      </div>
    </>
  );
}
