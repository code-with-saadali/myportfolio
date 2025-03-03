import { MdStarOutline } from "react-icons/md";
const AboutPortfolio = () => {
  return (
    <div className="px-20 max-lg:px-5 h-screen">
      <div className="main flex justify-between">
        <div className="row1 w-[40%] h-[510px] border bg rounded-xl border-[#636363]"></div>
        <div className="row2 w-[50%]">
          <div className="buttn">
            <button className="cursor-pointer bg-gradient-to-b flex items-center gap-2 bg shadow-[0px_4px_32px_0_rgba(47,47,47)] px-4 py-2 rounded-xl border border-[#5f5f5f] text-white font-medium group">
              <p>.</p>
              <p className="font-poppins">About</p>
            </button>
          </div>
          <div className="textt">
            <h1 className="font-poppins text-5xl font-medium leading-tight py-5">An Agency With Classic <br />
            Revolutionary Skills!</h1>
          </div>
          <div className="border-b border-dotted border-[#555555] max-w-[200px]"></div>
          <div className="textt">
            <h1 className="text-2xl font-poppins font-medium py-4">Your Success, Our Priority</h1>
            <p className="font-amiri text-lg text-[white]/70">At Landin, we believe in empowering our clients to achieve their goals. <br /> Our team works closely with you.</p>
          </div>
          <div className="textt">
            <h1 className="text-2xl font-poppins font-medium py-4">Partners You Can Rely On</h1>
            <p className="font-amiri text-lg text-[white]/70">Landin is here to ensure your success with expert guidance and <br /> collaborative teamwork.</p>
          </div>
          <div className="flex items-center gap-20">
          <div className="buttn my-5">
            <button className="cursor-pointer bg-gradient-to-b items-center gap-2 bg shadow-[0px_4px_32px_0_rgba(47,47,47)] px-4 py-2 rounded-xl border border-[#5f5f5f] text-white font-medium group">
              <p className="font-poppins">Book an Appointment</p>
            </button>
          </div>
          <div className="stars flex text-2xl gap-2">
          <MdStarOutline /><MdStarOutline /><MdStarOutline /> <MdStarOutline /><MdStarOutline />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPortfolio;
