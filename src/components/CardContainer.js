const CardContainer = ({ dimensionCode, personName }) => {
  return (
    <div className="relative w-[188px] h-[61px] text-center text-2xs-5 text-white font-inter">
      <img
        className="absolute top-[0px] left-[0px] rounded-[50%] w-[61.3px] h-[61.3px] object-cover"
        alt=""
        src={dimensionCode}
      />
      <div className="absolute top-[0px] left-[77px] w-[139.9px] h-[61.3px]">
        <div className="absolute top-[28.3px] left-[0px] rounded-md bg-whitesmoke-400 w-[33px] h-[33px]" />
        <div className="absolute top-[28px] left-[41px] rounded-md bg-whitesmoke-400 w-[70px] h-[33px]" />
        <div className="absolute top-[0px] left-[0px] rounded-781xl bg-whitesmoke-500 w-[110.6px] h-5 flex flex-row items-center justify-start py-0.5 pr-[15px] pl-3 box-border">
          <div className="relative leading-[15.75px] capitalize font-medium">
            {personName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
