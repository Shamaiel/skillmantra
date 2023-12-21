import { useMemo } from "react";

const TimeProgressContainer = ({ propLeft, propBackgroundImage, propTop }) => {
  const frameDiv6Style = useMemo(() => {
    return {
      left: propLeft,
      backgroundImage: propBackgroundImage,
      top: propTop,
    };
  }, [propLeft, propBackgroundImage, propTop]);

  return (
    <div
      className="absolute top-[calc(50%_-_205.5px)] left-[calc(50%_-_483.5px)] rounded-xl w-[260px] h-[350px] bg-[url('/public/frame-1000003699@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-3xs text-black1 font-inter"
      style={frameDiv6Style}
    >
      <div className="absolute top-[294px] left-[16px] rounded-9xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start">
        <div className="my-0 mx-[!important] absolute top-[13px] left-[15px] shrink-0 flex flex-row items-center justify-start gap-[9px] z-[0]">
          <img
            className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover opacity-[0.6]"
            alt=""
            src="/next@2x.png"
          />
          <div className="relative leading-[31.5px] font-medium">
            0:00 / 0:23
          </div>
          <img
            className="relative w-[62px] h-[15px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/frame-1000003693@2x.png"
          />
          <div className="shrink-0 flex flex-row items-start justify-start gap-[10px]">
            <img
              className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover opacity-[0.6]"
              alt=""
              src="/mute@2x.png"
            />
            <img
              className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover opacity-[0.6]"
              alt=""
              src="/mute@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeProgressContainer;
