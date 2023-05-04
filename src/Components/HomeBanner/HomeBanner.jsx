
import Slider from "react-slick";
// import HomeBannerSkeleton from "../Utils/HomeBannerSkeleton/HomeBannerSkeleton";
// import { DataContext } from "../../Provider/DataLoadProvider";
// import { useContext } from "react";

const HomeBanner = ({banner}) => {

   const settings = {
     dots: true,
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     speed: 500,
     autoplaySpeed: 5000,
     cssEase: "linear",
     pauseOnHover: true,
     lazyLoad: true,
    //  appendDots: (dots) => (
    //    <div
    //      style={{
    //        backgroundColor: "#313641",
    //        opacity: "1",
    //        borderRadius: "10px",
    //        padding: "10px",
    //        marginTop: "20px",
    //        display: "inline-block",
    //        color: "white",
    //      }}
    //    >
    //      <ul style={{ margin: "0px" }}> {dots} </ul>
    //    </div>
    //  ),
    //  customPaging: (i) => (
    //    <div
    //      style={{
    //        width: "30px",
    //        color: "white",
    //        border: "1px transparent solid",
    //        fontSize: "20px",
    //        fontWeight: "700",          
    //      }}
    //    >
    //      {i + 1}
    //    </div>
    //  ),
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
         },
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           initialSlide: 1,
         },
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         },
       },
     ],
   };



 return (
   <div className=" bg-gray-300">
   
     <Slider {...settings}>
       {banner.map((item, i) => {
         return (
           <div className="" key={i}>
             <div className="hero h-96 bg-base-200">
               <div className="hero-content flex-col lg:flex-row-reverse">
                 <img
                   src={item.image}
                   className="max-w-sm xl:h-72 h-48   rounded-lg shadow-2xl"
                 />
                 <div>
                   <h1 className="text-2xl md:text-4xl pb-10 font-semibold text-center xl:text-left">
                     {item.punch}
                   </h1>
                 </div>
               </div>
             </div>
           </div>
         );
       })}
     </Slider>
   </div>
 );
  

 
};

export default HomeBanner;
