const FormContainer2 = () => {
  return (
    <div className="relative bg-white w-[1440px] h-[565px] overflow-hidden shrink-0 text-center text-13xl text-deeppink font-montserrat">
      <div className="absolute top-[248px] left-[calc(50%_-_636px)] flex flex-row items-start justify-start gap-[40px]">
        <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[45px] font-semibold">
            93% of Curtomers
          </div>
          <div className="relative text-2xl leading-[38px] font-inter text-gray-400 text-left inline-block w-[397px]">{`It is crucial to know the right type of influencers that will be best fit for implementing cost effective `}</div>
        </div>
        <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[45px] font-semibold">
            10x more views
          </div>
          <div className="relative text-2xl leading-[38px] font-inter text-gray-400 text-left inline-block w-[397px]">
            It is crucial to know the right type of influencers that will be
            best fit for implementing cost effective campaigns in order to
            achieve your business goals.
          </div>
        </div>
        <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[45px] font-semibold">
            9.8x More Impactful
          </div>
          <div className="relative text-2xl leading-[38px] font-inter text-gray-400 text-left inline-block w-[397px]">
            It is crucial to know the right type of influencers that will be
            best fit for implementing cost
          </div>
        </div>
      </div>
      <div className="absolute top-[107px] left-[415px] [background:linear-gradient(90deg,_rgba(147,_87,_255,_0.5)_2.57%,_rgba(147,_87,_255,_0.1))] box-border w-[115px] h-[51px] border-l-[3px] border-solid border-blueviolet-100" />
      <b className="absolute top-[110px] left-[calc(50%_-_290px)] text-21xl leading-[45px] text-darkslategray-200">
        <p className="m-0">UGC is your go-to ad Format</p>
        <p className="m-0">{`in 2023 `}</p>
      </b>
    </div>
  );
};

export default FormContainer2;
