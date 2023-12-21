const MainHeader = () => {
  return (
    <div className="absolute top-[-1px] left-[0px] [background:linear-gradient(#f8f9fa,_#f8f9fa),_#f8f9fa] [backdrop-filter:blur(50px)] flex flex-col items-start justify-center gap-[10px] text-left text-sm text-dimgray-100 font-inter border-b-[2px] border-solid border-gray-1000">
      <div className="relative bg-whitesmoke-100 [backdrop-filter:blur(50px)] box-border w-[1440px] h-[100px] z-[0] border-b-[1px] border-solid border-gray-1000" />
      <div className="my-0 mx-[!important] absolute top-[25px] left-[calc(50%_-_600px)] shrink-0 flex flex-row items-center justify-start gap-[239px] z-[1]">
        <div className="shrink-0 flex flex-row items-center justify-start gap-[35px]">
          <img
            className="relative rounded-xl w-[60px] h-[60px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/wi-artboard-13x20-5@2x.png"
          />
          <div className="shrink-0 flex flex-row items-start justify-start">
            <div className="shrink-0 flex flex-col items-start justify-center pt-[13px] pb-[15.5px] pr-[14.230003356933594px] pl-3.5 text-deeppink">
              <div className="self-stretch relative leading-[16.5px] font-medium">
                For brands
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-center pt-[13px] pb-[15.5px] pr-[13.410003662109375px] pl-3.5 text-mini">
              <div className="self-stretch relative leading-[16.5px]">
                For creators
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-center pt-[13px] pb-[15.5px] pr-[13.5px] pl-3.5">
              <div className="self-stretch relative leading-[16.5px]">
                Pricing
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-center pt-[13px] pb-[15.5px] pr-[17.269996643066406px] pl-3.5 text-smi">
              <div className="self-stretch relative leading-[16.5px]">
                Contact us
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-center pt-[13px] pb-[15.5px] pr-[15.860000610351562px] pl-3.5 text-smi">
              <div className="self-stretch relative leading-[16.5px]">
                Blogs
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 flex flex-row items-start justify-start gap-[28px]">
          <div className="self-stretch relative rounded-xl w-[124px]">
            <img
              className="absolute top-[14px] left-[calc(50%_-_33.8px)] w-4 h-[17px] overflow-hidden object-cover"
              alt=""
              src="/svg@2x.png"
            />
            <div className="absolute top-[13.3px] left-[50.2px] leading-[16.5px]">
              Sign in
            </div>
          </div>
          <div className="shrink-0 flex flex-row items-start justify-start gap-[16px] text-smi text-white">
            <button className="cursor-pointer [border:none] py-[13px] pr-[39.47999954223633px] pl-[38.52000045776367px] bg-white rounded-13xl shadow-[0px_0px_40px_rgba(255,_86,_162,_0.2)] w-[124px] shrink-0 flex flex-row items-center justify-center box-border">
              <div className="relative text-sm leading-[16.5px] font-inter text-blueviolet-100 text-left">
                Login
              </div>
            </button>
            <div className="rounded-13xl bg-hotpink-100 shadow-[0px_0px_40px_rgba(255,_86,_162,_0.2)] w-[124px] shrink-0 flex flex-row items-center justify-center py-[13px] pr-[30px] pl-8 box-border">
              <div className="relative leading-[16.5px]">Book a Demo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
