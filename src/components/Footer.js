const Footer = () => {
  return (
    <div className="absolute bottom-[0px] left-[calc(50%_-_720px)] bg-whitesmoke-100 box-border w-[1440px] flex flex-row items-start justify-center pt-px px-[220px] pb-0 text-left text-3xs text-gray-100 font-inter border-t-[1px] border-solid border-gray-1000">
      <div className="flex-1 flex flex-col items-start justify-start py-0 px-6 box-border max-w-[1480px]">
        <div className="self-stretch flex flex-row items-center justify-center pt-8 pb-4 pr-[483.260009765625px] pl-[483.2300109863281px] gap-[12px]">
          <div className="shrink-0 flex flex-row items-start justify-start py-0 pr-[6.5800018310546875px] pl-0">
            <div className="relative leading-[15px] whitespace-pre-wrap">
              <span>{`© 2023 `}</span>
              <b className="text-hotpink-200">
                <span>Creator's Bay</span>
              </b>
              <span>
                <b className="text-hotpink-200">{` `}</b>
                <span> Worldwide, Inc.</span>
              </span>
            </div>
          </div>
          <div className="shrink-0 flex flex-row items-start justify-start gap-[8px]">
            <div className="shrink-0 flex flex-row items-start justify-start py-0 pr-[11.089996337890625px] pl-0 border-r-[1px] border-solid border-gray-1000">
              <div className="relative leading-[15px]">Terms of Service</div>
            </div>
            <div className="shrink-0 flex flex-row items-start justify-start py-0 pr-[11.860000610351562px] pl-0 border-r-[1px] border-solid border-gray-1000">
              <div className="relative leading-[15px]">Privacy Notice</div>
            </div>
            <div className="shrink-0 flex flex-row items-start justify-start py-0 pr-[5.980003356933594px] pl-0">
              <div className="relative leading-[15px]">
                California Privacy Notice
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center pt-0 px-[634px] pb-8 gap-[16px]">
          <div className="w-5 h-5 flex flex-row items-start justify-center pt-[1.3799999952316284px] px-0 pb-0 box-border">
            <div className="w-5 h-5 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[1.9045270681381226px] pb-[3.322744846343994px] pr-[0.9131273031234741px] pl-[0.9090906381607056px] box-border">
              <img
                className="relative w-[18.2px] h-[14.8px] object-cover"
                alt=""
                src="/vector@2x.png"
              />
            </div>
          </div>
          <div className="w-5 h-5 flex flex-row items-start justify-center pt-[1.3799999952316284px] px-0 pb-0 box-border">
            <div className="w-5 h-5 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[0.19997243583202362px] pb-[1.618182897567749px] pr-[5.278963565826416px] pl-[5.278981685638428px] box-border">
              <img
                className="relative w-[9.4px] h-[18.2px] object-cover"
                alt=""
                src="/vector@2x.png"
              />
            </div>
          </div>
          <div className="w-5 h-5 flex flex-row items-start justify-center pt-[1.3799999952316284px] px-0 pb-0 box-border">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/svg@2x.png"
            />
          </div>
          <div className="w-5 h-5 flex flex-row items-start justify-center pt-[1.3799999952316284px] px-0 pb-0 box-border">
            <div className="w-5 h-5 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[3.6363635063171387px] pb-[3.5756373405456543px] pr-[0.9090913534164429px] pl-[0.9090906381607056px] box-border">
              <img
                className="relative w-[18.2px] h-[12.8px] object-cover"
                alt=""
                src="/vector@2x.png"
              />
            </div>
          </div>
          <div className="w-5 h-5 flex flex-row items-start justify-center pt-[1.3799999952316284px] px-0 pb-0 box-border">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/svg@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
