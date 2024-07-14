import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {ReactComponent as WorkIcon} from "../Assets/work.svg"
import "../Styles/common.css";
import { useState } from 'react';
import htmlLogo from "../Assets/html.svg";
import cssLogo from "../Assets/css.svg";
import javascriptLogo from "../Assets/javascript.svg";
import dotnetLogo from "../Assets/dot-net.svg";
import javaLogo from "../Assets/java.svg";
import mastek from "../Assets/mastek_logo.jpg"
import bootstrapLogo from "../Assets/bootstrap.svg";
import reactLogo from "../Assets/react.svg";
import springLogo from "../Assets/springboot.svg";
export default function WorkExperience(){
    const [experience,setExperience]=useState([
    {id:1,company:"Mastek Ltd",title:"Software Engineer",src:`${mastek}`,desc:"Recognized for outstanding contributions, leading transformative upgrades and pioneering user-centric features. Delivered high-impact solutions, shaping project success in the UK.",projectName:"UK | Healthcare",timeline:"Feb 2023-Present",technology:[{techId:1,src:`${htmlLogo}`},{techId:2,src:`${cssLogo}`},{techId:3,src:`${javascriptLogo}`},{techId:4,src:`${reactLogo}`},{techId:6,src:`${springLogo}`},{techId:5,src:`${bootstrapLogo}`}]},
    {id:2,company:"Mastek Ltd",title:"Trainee Software Engineer",src:`${mastek}`,desc:"Pivotal role in debut project: Revolutionized frontend design for intuitive user experiences. Leveraged ReactJS for polished product pages and streamlined frontend-backend communication.",projectName:"UK | Ecommerce",timeline:"May 2022-Feb 2023",technology:[{techId:1,src:`${htmlLogo}`},{techId:2,src:`${cssLogo}`},{techId:3,src:`${javascriptLogo}`},{techId:4,src:`${reactLogo}`},{techId:5,src:`${bootstrapLogo}`},{techId:6,src:`${springLogo}`},{techId:7,src:`${javaLogo}`}]}]);
    return<>     
<div >
<VerticalTimeline lineColor='rgb(0 184 255)'>
{experience.map((item)=>(
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ borderTop:"5px rgb(0 184 255) solid",background: 'rgb(236 254 255)', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    dateClassName='text-cust'
    date={item.timeline}
    iconStyle={{ background: 'rgb(0 184 255)', color: 'grey' }}
     icon={<WorkIcon/>}
     key={item.id}
  >
    <h5 className="vertical-timeline-element-title" style={{color:"rgb(57 195 225)"}}><span><img width={50}height={40} src={item.src} alt="" /></span></h5>
    <p className="vertical-timeline-element-subtitle"style={{color:"rgb(54 92 104)"}}>{item.projectName}</p>
    <hr />
    <p style={{color: "rgb(109 147 159)"}}>
     {item.desc}
    </p>
      <hr />
    <div className="justify-content-around " style={{display:"flex"}}>
    {item.technology.map((tech)=>(
        <img key={tech.techId} width={45} height={30} className='rounded' src={tech.src} alt="" />
        ))}
    </div>
  </VerticalTimelineElement>
))}
</VerticalTimeline>
</div>
         </>
}