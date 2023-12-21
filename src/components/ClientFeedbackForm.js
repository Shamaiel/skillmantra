const ClientFeedbackForm = () => {
  return (
    <div className="relative w-[1440px] h-[758px] shrink-0 text-left text-3xl text-gray-500 font-inter">
      <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[1440px] overflow-hidden">
        <div className="absolute top-[182px] left-[calc(50%_-_660px)] rounded-6xl bg-peachpuff w-[1320px] h-[511px]" />
        <div className="absolute top-[207px] left-[85px] w-[1191px] h-[461px]">
          <div className="absolute top-[380px] left-[538px] flex flex-row items-start justify-start gap-[40px]">
            <div className="rounded-9xl bg-white shadow-[0px_0px_4px_rgba(19,_19,_19,_0.25)] w-14 h-14 overflow-hidden shrink-0 flex flex-row items-center justify-center p-4 box-border">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/svg@2x.png"
              />
            </div>
            <div className="rounded-9xl bg-white shadow-[0px_0px_4px_rgba(19,_19,_19,_0.25)] w-14 h-14 overflow-hidden shrink-0 flex flex-row items-center justify-center p-4 box-border">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/svg@2x.png"
              />
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[538px] w-[63.6px] h-[47.1px] object-cover"
            alt=""
            src="/frame-1000003676@2x.png"
          />
          <div className="absolute top-[77px] left-[538px] leading-[40.8px] flex items-center w-[653px] h-[82px]">
            <span className="w-full">
              <b>Creator's Bay</b>
              <span className="font-semibold">
                {" "}
                changed the way we understand and approach influencer marketing.
              </span>
            </span>
          </div>
          <div className="absolute top-[163px] left-[538px] text-base leading-[30.6px] text-gray-800 flex items-center w-[653px] h-[62px]">
            Not only have we eliminated time-consuming tasks, but the ability to
            discover influencers we might not have
          </div>
          <div className="absolute top-[242px] left-[538px] text-lg leading-[34px] font-semibold flex items-center w-[413px] h-[68px]">
            <span className="w-full">
              <p className="m-0">Merikom</p>
              <p className="m-0">
                Influencer Marketing Program Manager, PicsArt
              </p>
            </span>
          </div>
          <img
            className="absolute top-[calc(50%_-_230.5px)] left-[0px] rounded-2xl w-[488px] h-[461px] object-cover"
            alt=""
            src="/rectangle-24008@2x.png"
          />
        </div>
        <div className="absolute top-[74px] left-[calc(50%_-_195px)] text-29xl font-semibold text-gray-200">
          From Our Clients
        </div>
      </div>
    </div>
  );
};

export default ClientFeedbackForm;
