import ContainerForm from "./ContainerForm";
import FormContainer from "./FormContainer";

const PortfolioCard = () => {
  return (
    <div className="absolute top-[calc(50%_-_392px)] left-[698px] w-[712px] h-[904px] overflow-hidden text-left text-sm text-white font-inter">
      <ContainerForm
        imageDimensions="/rectangle-24005@2x.png"
        propTop="calc(50% + 33px)"
        propLeft="9px"
      />
      <FormContainer propTop="calc(50% + 518px)" />
      <ContainerForm
        imageDimensions="/rectangle-24005@2x.png"
        propTop="calc(50% - 148px)"
        propLeft="368px"
      />
      <ContainerForm
        imageDimensions="/rectangle-24005@2x.png"
        propTop="calc(50% - 633px)"
        propLeft="368px"
      />
      <ContainerForm
        imageDimensions="/rectangle-24005@2x.png"
        propTop="calc(50% - 452px)"
        propLeft="9px"
      />
      <FormContainer propTop="calc(50% - 937px)" />
      <ContainerForm
        imageDimensions="/rectangle-24005@2x.png"
        propTop="789px"
        propLeft="368px"
      />
    </div>
  );
};

export default PortfolioCard;
