import Step1Container from "./Step1Container";

const Container1 = () => {
  return (
    <div className="relative w-[1440px] h-[767px] text-left text-21xl text-white font-montserrat">
      <div className="absolute top-[713px] left-[1172px] w-[248px] h-[165px] opacity-[0.3] flex items-center justify-center">
        <img
          className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(4.042)]"
          alt=""
          src="/vector-1@2x.png"
        />
      </div>
      <div className="absolute top-[70px] left-[calc(50%_-_320px)] leading-[45px] font-extrabold text-darkslategray-200 text-center">
        {" "}
        How does CreatorsBay work?
      </div>
      <b className="absolute top-[795px] left-[580.7px] font-karla">{` `}</b>
      <Step1Container
        imageDimensions="/3drenderhandshakeiconisolatedbusinessconcept-1@2x.png"
        stepDescription="Step 1"
        stepButtonText="Register and submit campaign brief"
        propLeft="54px"
        propWidth="136px"
      />
      <Step1Container
        imageDimensions="/checkmarkcorrectapprovediconsymbolwhitebackground3dillustration-1@2x.png"
        stepDescription="Step 2"
        stepButtonText="Choose creators you want to work with"
        propLeft="508px"
        propWidth="65.6px"
        propBorderRadius="10px"
      />
      <Step1Container
        imageDimensions="/image-185@2x.png"
        stepDescription="Step 3"
        stepButtonText="Submit and sit back while we get your brand UGC ready !"
        propLeft="962px"
        propWidth="106.2px"
        propBorderRadius="40px"
      />
    </div>
  );
};

export default Container1;
