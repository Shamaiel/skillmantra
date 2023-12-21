import { useMemo } from "react";
import StateDefaultTypeAdd from "./StateDefaultTypeAdd";

const Property1closed = ({
  prop,
  loremIpsumDolorSitAmetCon,
  component2,
  h4,
  frameDiv,
  property1closedAlignItems,
  property1closedJustifyContent,
  property1closedFlexShrink,
  property1closedBorder,
  divFontFamily,
  divColor,
  divFontWeight,
  loremIpsumDolorFontFamily,
  loremIpsumDolorColor,
  loremIpsumDolorFontWeight,
  addBackgroundColor,
  h4FontFamily,
  h4Color,
}) => {
  const property1closedStyle = useMemo(() => {
    return {
      alignItems: property1closedAlignItems,
      justifyContent: property1closedJustifyContent,
      flexShrink: property1closedFlexShrink,
      border: property1closedBorder,
    };
  }, [
    property1closedAlignItems,
    property1closedJustifyContent,
    property1closedFlexShrink,
    property1closedBorder,
  ]);

  const divStyle = useMemo(() => {
    return {
      fontFamily: divFontFamily,
      color: divColor,
      fontWeight: divFontWeight,
    };
  }, [divFontFamily, divColor, divFontWeight]);

  const loremIpsumDolorStyle = useMemo(() => {
    return {
      fontFamily: loremIpsumDolorFontFamily,
      color: loremIpsumDolorColor,
      fontWeight: loremIpsumDolorFontWeight,
    };
  }, [
    loremIpsumDolorFontFamily,
    loremIpsumDolorColor,
    loremIpsumDolorFontWeight,
  ]);

  const stateDefaultTypeAddStyle = useMemo(() => {
    return {
      backgroundColor: addBackgroundColor,
    };
  }, [addBackgroundColor]);

  const h4Style = useMemo(() => {
    return {
      fontFamily: h4FontFamily,
      color: h4Color,
    };
  }, [h4FontFamily, h4Color]);

  return (
    <div
      className="rounded-lg [backdrop-filter:blur(15px)] flex flex-row items-center justify-center py-0 pr-0 pl-10 text-left text-5xl text-white font-helvetica-neue border-[2px] border-solid border-black"
      style={property1closedStyle}
    >
      <div className="shrink-0 flex flex-col items-start justify-center">
        <div className="shrink-0 flex flex-row items-center justify-start gap-[40px]">
          <div className="relative" style={divStyle}>
            {prop}
          </div>
          <div
            className="relative inline-block w-[575px] shrink-0"
            style={loremIpsumDolorStyle}
          >
            {loremIpsumDolorSitAmetCon}
          </div>
          <StateDefaultTypeAdd
            component2="/component-2@2x.png"
            stateDefaultTypeAddBackgroundColor="#152329"
          />
        </div>
        {!frameDiv && (
          <div className="w-[728px] shrink-0 hidden flex-row items-start justify-start pt-5 pb-0 pr-2.5 pl-[67px] box-border text-xl font-helveticaneue">
            <div
              className="relative leading-[36px] font-light inline-block w-[661px] h-[216px] shrink-0"
              style={h4Style}
            >
              {h4}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Property1closed;
