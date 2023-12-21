import { useMemo } from "react";

const Step1Container = ({
  imageDimensions,
  stepDescription,
  stepButtonText,
  propLeft,
  propWidth,
  propBorderRadius,
}) => {
  const frameDiv5Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const dRenderHandshakeIconIsolatStyle = useMemo(() => {
    return {
      width: propWidth,
      borderRadius: propBorderRadius,
    };
  }, [propWidth, propBorderRadius]);

  return (
    <div
      className="absolute top-[194px] left-[54px] w-[424px] h-[613px] text-left text-2xl text-white font-inter"
      style={frameDiv5Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-31xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[424px] h-[529px]" />
      <div className="absolute top-[60px] left-[50px] flex flex-col items-start justify-start gap-[26px]">
        <div className="shrink-0 flex flex-col items-start justify-start gap-[20px]">
          <div className="shrink-0 flex flex-col items-start justify-start gap-[16px]">
            <img
              className="relative w-[136px] h-[66px] object-cover"
              alt=""
              src={imageDimensions}
              style={dRenderHandshakeIconIsolatStyle}
            />
            <div className="rounded-31xl bg-blueviolet-100 shadow-[0px_0px_40px_rgba(255,_86,_162,_0.2)] w-[130.2px] flex flex-col items-center justify-center pt-[17px] px-8 pb-[18px] box-border">
              <div className="flex flex-row items-start justify-start pt-0 pb-[0.7999992370605469px] pr-[0.160003662109375px] pl-0">
                <div className="relative leading-[19.8px] font-semibold">
                  {stepDescription}
                </div>
              </div>
            </div>
          </div>
          <b className="relative text-13xl inline-block font-karla text-gray-400 w-[344px]">
            {stepButtonText}
          </b>
        </div>
        <div className="relative leading-[38px] font-medium text-gray-400 inline-block w-[344px] opacity-[0.7]">
          Use our simple brief builder to specify your video specs, concept and
          creator requirements.
        </div>
      </div>
    </div>
  );
};

export default Step1Container;
