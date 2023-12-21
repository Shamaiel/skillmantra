import { useMemo } from "react";

const StateDefaultTypeAdd = ({
  component2,
  stateDefaultTypeAddBackgroundColor,
}) => {
  const stateDefaultTypeAddStyle = useMemo(() => {
    return {
      backgroundColor: stateDefaultTypeAddBackgroundColor,
    };
  }, [stateDefaultTypeAddBackgroundColor]);

  return (
    <div
      className="rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-black [backdrop-filter:blur(15px)] w-[86px] h-20 flex flex-row items-center justify-center py-[29px] px-8 box-border"
      style={stateDefaultTypeAddStyle}
    >
      <img
        className="relative w-[22px] h-[22px] object-cover"
        alt=""
        src={component2}
      />
    </div>
  );
};

export default StateDefaultTypeAdd;
