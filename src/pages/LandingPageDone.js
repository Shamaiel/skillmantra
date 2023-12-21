import Container from "../components/Container";
import PortfolioCard from "../components/PortfolioCard";
import Container1 from "../components/Container1";
import FormContainer3 from "../components/FormContainer3";
import FormContainer1 from "../components/FormContainer1";
import FormContainer2 from "../components/FormContainer2";
import FAQContainer from "../components/FAQContainer";
import ClientFeedbackForm from "../components/ClientFeedbackForm";
import GearContainer from "../components/GearContainer";
import Footer from "../components/Footer";
import Header from "../components/Header";

const LandingPageDone = () => {
  return (
    <div className="relative bg-white w-full h-[6101px] overflow-hidden md:w-0.5">
      <div className="absolute top-[11px] left-[calc(50%_-_719.5px)] flex flex-col items-start justify-start">
        <div className="relative w-[1440px] h-[1024px] md:min-w-[600px] md:max-w-[1024px] sm:max-w-[599px]">
          <Container />
          <div className="absolute top-[279px] left-[660px] w-[539.9px] h-[358.9px] opacity-[0.3] flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(2.399)]"
              alt=""
              src="/vector-2@2x.png"
            />
          </div>
          <img
            className="absolute top-[172px] left-[148px] w-[130px] h-[89.4px] object-cover"
            alt=""
            src="/46174613png@2x.png"
          />
          <img
            className="absolute top-[calc(50%_+_208px)] left-[calc(50%_-_204px)] w-[100px] h-[119.7px] object-cover"
            alt=""
            src="/561616png@2x.png"
          />
          <PortfolioCard />
        </div>
        <Container1 />
        <FormContainer3 />
        <FormContainer1 />
        <FormContainer2 />
        <FAQContainer />
        <ClientFeedbackForm />
        <div className="relative bg-white w-[1440px] h-[422px]">
          <GearContainer />
          <Footer />
        </div>
      </div>
      <Header />
    </div>
  );
};

export default LandingPageDone;
