import headerImg from "../../assets/header.jpg";

const HeaderBg = () => {
  return (
    <div className="absolute -z-10 right-0 top-0">
      <div className="w-full h-full bg-white absolute left-0 top-0 bg-opacity-70 z-10 "></div>
      <div className="triangle h-full bg-white bg-opacity-0 absolute left-0 top-0  z-10 "></div>
      <img
        style={{ height: "180px", width:"800px" }}
        src={headerImg}
        className=" -z-10 relative  rounded-lg "
        alt=""
      />
    </div>
  );
};

export default HeaderBg;
