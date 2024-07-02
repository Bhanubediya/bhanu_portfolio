import { useState } from "react"

export default function Testimonial() {

  const [testimonies,setTestimonies]=useState([
    {id:1,desc:"Bhanu is very bright and has been involved in resolution of some very complex technical issues. Even at relatively very low years of experience, he is entrusted to solve complex technical issues.",
    img:"https://media.licdn.com/dms/image/D4D22AQFGZxrbiCfDwg/feedshare-shrink_1280/0/1719155396266?e=1722470400&v=beta&t=l-J-wW3Z8EwnzwQnQp6uBg6vFEahVpb9GnB3LJSmohY",
    title:"#GEMTrueChampionINEG",
    showMore:false,
    href:"https://www.linkedin.com/posts/bhanu-bediya-161240157_gemtruechampionineg-activity-7210660356199772160-scJi?utm_source=share&utm_medium=member_desktop"
    },
    {id:2,desc:"We appreciate your commitment and contribution towards Platform upgrade Phase 3 (Bootstrap and jQuery upgrade). Additionally, you have provided a good level of assistance to other team members in troubleshooting upgrade-related concerns. Keep up the good work!",
      img:"https://media.licdn.com/dms/image/D4D22AQHPhNvNFycJMw/feedshare-shrink_1280/0/1719232420199?e=1722470400&v=beta&t=WWijq1_uTQgZWI1laonVDrp8D9kGP6wcPKt81Kl8eiQ",
      title:"#BrightSparkINEG",
      showMore:false,
      href:"https://www.linkedin.com/posts/bhanu-bediya-161240157_brightsparkineg-activity-7210983417943908352-5LvX?utm_source=share&utm_medium=member_desktop"
    },
    {id:3,desc:"Bhanu Bediya Thank you for your commitment and contribution in learning Performer Lists and Ophthalmic Service Lines in short span of time, also you have played significant role in preparing automated unit test cases. You have been working on RFWs efficiently within stipulated time. Keep up good work.",
      img:"https://media.licdn.com/dms/image/D4D22AQFGZxrbiCfDwg/feedshare-shrink_1280/0/1719155396266?e=1722470400&v=beta&t=l-J-wW3Z8EwnzwQnQp6uBg6vFEahVpb9GnB3LJSmohY",
      title:"#GEMTrueChampionINEG",
      showMore:false,
      href:"https://www.linkedin.com/posts/bhanu-bediya-161240157_gemtruechampionineg-mastek-mastekeer-activity-7084185063164174336-Vlcf?utm_source=share&utm_medium=member_desktop"
    },
    {id:4,desc:"Bhanu Bediya It was good to see your dedication to learning Performer Lists and Ophthalmic Service Lines in a short span of time. You have been working on RFWs efficiently within the stipulated time. We really appreciate your bright spark. Keep up the good work.",
      img:"https://media.licdn.com/dms/image/D4D22AQHPhNvNFycJMw/feedshare-shrink_1280/0/1719232420199?e=1722470400&v=beta&t=WWijq1_uTQgZWI1laonVDrp8D9kGP6wcPKt81Kl8eiQ",
      title:"#BrightSparkINEG",
      showMore:false,href:"https://www.linkedin.com/posts/bhanu-bediya-161240157_brightsparkineg-mastek-mastekeer-activity-7080221264610476032-PWzB?utm_source=share&utm_medium=member_desktop"
    }
])
const handleShowMore=(id)=>{
setTestimonies(testimonies.map((item) =>
  item.id === id ? { ...item, showMore: !item.showMore } : item
));
}
  return (
    <div  data-aos="fade-up"
    data-aos-duration="800">
        <swiper-container className="mySwiper" center-slides="true" navigation="true" pagination="true" pagination-clickable="true" 

    style={
      {
      "--swiper-navigation-color": "beige", 
      "--swiper-pagination-color": "rgb(4 196 255)",
      "--swiper-pagination-bullet-inactive-color":"#fff"
      }}
      breakpoints={
        JSON.stringify({
          300:{
            slidesPerView: 1,
          }
           , 
            640:{
                slidesPerView: 1,
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },

            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1367:{
                slidesPerView: 4,
                spaceBetween: 40,
            }
        })
    }
      >
        {testimonies.map((item)=>(
       
          <swiper-slide key={item.id}>
              
             <figure className="snip1192">
      <blockquote>
  {item.showMore ? item.desc : `${item.desc.substring(0, 170)}`}
  {item.desc.length > 170 && (
                  <span
                    className="text-primary"
                    onClick={() => handleShowMore(item.id)}
                    style={{ cursor: "pointer", marginLeft: "5px" }}
                  >
                    {item.showMore ? "... read less" : "... read more"}
                  </span>
                )}

      </blockquote>
      <a className="text-decoration-none" href={item.href}>
      <div className="author">
        <img src={item.img} alt="sq-sample1"/>
        <h5>{item.title}</h5>
      </div>
      </a>
    </figure>
   
    </swiper-slide>
     
        ))}
        </swiper-container>
    
    </div>
  )
}