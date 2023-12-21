import { useMemo } from "react";

const ContainerForm = ({ imageDimensions, propTop, propLeft }) => {
  const frameDiv3Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[calc(50%_+_33px)] left-[9px] w-[324px] h-[450px] text-left text-sm text-white font-inter"
      style={frameDiv3Style}
    >
      <div className="absolute top-[calc(50%_-_225px)] left-[calc(50%_-_152px)] rounded-6xl w-[305px] h-[450px] flex items-center justify-center">
        <img
          className="w-full h-full object-contain absolute left-[4px] top-[4px] [transform:scale(1.223)]"
          alt=""
          src={imageDimensions}
        />
      </div>
      <div className="absolute top-[369px] left-[30px] flex flex-row items-end justify-start gap-[15px]">
        <div className="shrink-0 flex flex-col items-start justify-start">
          <div className="shrink-0 flex flex-col items-start justify-start gap-[6px]">
            <div className="shrink-0 flex flex-row items-start justify-start gap-[8px]">
              <img
                className="relative w-5 h-5 object-cover"
                alt=""
                src="/frame-1000003745@2x.png"
              />
              <div className="relative leading-[19.8px]">5.0(2)</div>
            </div>
            <div className="relative text-mid leading-[19.8px] font-medium">
              Neha singh
            </div>
          </div>
        </div>
        <div className="rounded-31xl bg-gray-700 shadow-[0px_0px_40px_rgba(255,_86,_162,_0.2)] box-border h-[42px] shrink-0 flex flex-col items-center justify-center pt-[17px] px-5 pb-[18px] text-mid border-[1px] border-solid border-white">
          <div className="shrink-0 flex flex-row items-start justify-start pt-0 pb-[0.7999992370605469px] pr-[0.160003662109375px] pl-0">
            <div className="relative leading-[19.8px] font-semibold">
              View Portfolio
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerForm;
