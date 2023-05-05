import Marquee from "react-fast-marquee";

const UpcommingEvents = () => {
  return (
    <div className="pt-4">
      <div className="container mx-auto mobile_padding">
        <div className="flex bg-rose-400">
          <button className="btn rounded-none ">Upcomming Events</button>
          <Marquee className=" text-white text-xl ">
            Magical Unicorn Baking Workshop - Learn to bake and decorate
            unicorn-themed desserts on <span className="text-black ml-2"> June 15th </span>.
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default UpcommingEvents;
