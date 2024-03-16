import { useState } from "react"
import "./common.css";
import htmlLogo from "../Assets/html.svg";
import cssLogo from "../Assets/css.svg";
import javascriptLogo from "../Assets/javascript.svg";
import dotnetLogo from "../Assets/dot-net.svg";
import angularLogo from "../Assets/angular.svg";
import javaLogo from "../Assets/java.svg";
import bootstrapLogo from "../Assets/bootstrap.svg";
import reactLogo from "../Assets/react.svg";
import springLogo from "../Assets/spring.svg";
import sqlserverLogo from "../Assets/sql-server.svg";

export default function Skills(){
    const [logos,setLogos]=useState([
        {id:1,name:"HTML",src:`${htmlLogo}`},{id:2,name:"CSS",src:`${cssLogo}`},{id:3,name:"JavaScript",src:`${javascriptLogo}`},{id:4,name:"BootStrap",src:`${bootstrapLogo}`},{id:5,name:"React Js",src:`${reactLogo}`},{id:6,name:"Angular",src:`${angularLogo}`},
        {id:7,name:"Java",src:`${javaLogo}`},{id:8,name:"Spring Boot",src:`${springLogo}`},{id:10,name:".Net Core",src:`${dotnetLogo}`},{id:11,name:"SQL",src:`${sqlserverLogo}`},
    ]);
        return<>
           <div className="scroller overflow-hidden pt-2" style={{ whiteSpace:"nowrap", backgroundColor: "white"}}>
           <div className="scroll-list overflow-hidden">
           {logos.map((item)=>(
             <img key={item.id} src={item.src} alt={item.name} />   
           ))}
           </div>
           <div className="scroll-list overflow-hidden">
           {logos.map((item)=>(
             <img key={item.id} src={item.src} alt={item.name} />   
           ))}
           </div>
           </div>
         </>
}