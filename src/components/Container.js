import { useCallback } from "react";

const Container = () => {
  const onGetStartedClick = useCallback(() => {
    // Please sync "Landing page done" to the project
  }, []);

  return (
    <div className="absolute top-[394px] left-[80px] flex flex-col items-start justify-start gap-[25px] text-left text-31xl text-darkslategray-200 font-inter">
      <div className="w-[610px] flex flex-col items-start justify-start py-0 pr-[46px] pl-0 box-border gap-[25px] font-montserrat">
        <div className="relative leading-[59px] font-extrabold">
          Get thumb stopping ...
        </div>
        <div className="flex flex-row items-start justify-start gap-[15px]">
          <div className="relative leading-[59px] font-extrabold">for your</div>
          <div className="relative w-[239px] h-[59px] text-blueviolet-100">
            <div className="absolute w-full top-[0%] left-[0%] leading-[59px] font-extrabold flex items-center">
              Brand
            </div>
          </div>
        </div>
      </div>
      <div className="w-[600px] shrink-0 flex flex-row items-start justify-start pt-0 pb-[1.1899986267089844px] pr-[60px] pl-0 box-border text-13xl text-dimgray-200">
        <div className="relative flex items-center w-[553px] shrink-0">
          Never run out of....
        </div>
      </div>
      <div className="shrink-0 flex flex-row items-start justify-start gap-[25px] text-mid text-hotpink-100">
        <button
          className="cursor-pointer [border:none] pt-[17px] px-8 pb-[18px] bg-hotpink-100 rounded-31xl shadow-[0px_0px_40px_rgba(255,_86,_162,_0.2)] shrink-0 flex flex-col items-center justify-center"
          onClick={onGetStartedClick}
        >
          <div className="shrink-0 flex flex-row items-start justify-start pt-0 pb-[0.7999992370605469px] pr-[0.160003662109375px] pl-0">
            <div className="relative text-mid leading-[19.8px] font-semibold font-inter text-white text-left">
              Get started
            </div>
          </div>
        </button>
        <div className="rounded-31xl shadow-[0px_0px_40px_rgba(255,_86,_162,_0.2)] shrink-0 flex flex-col items-center justify-center pt-[17px] px-8 pb-[18px] border-[1px] border-solid border-hotpink-100">
          <div className="shrink-0 flex flex-row items-start justify-start pt-0 pb-[0.7999992370605469px] pr-[0.160003662109375px] pl-0">
            <div className="relative leading-[19.8px] font-semibold">
              Request demo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
