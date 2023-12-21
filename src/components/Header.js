import { useState, useCallback } from "react";
import Login from "./Login";
import PortalPopup from "./PortalPopup";

const Header = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);

  const onItemContainerClick = useCallback(() => {
    // Please sync "Landing page done" to the project
  }, []);

  const openLogin = useCallback(() => {
    setLoginOpen(true);
  }, []);

  const closeLogin = useCallback(() => {
    setLoginOpen(false);
  }, []);

  const onLogin1Click = useCallback(() => {
    window.open("/login");
  }, []);

  return (
    <>
      <div className="absolute top-[-1px] left-[0px] [background:linear-gradient(rgba(248,_249,_250,_0.02),_rgba(248,_249,_250,_0.02)),_linear-gradient(rgba(248,_249,_250,_0.02),_rgba(248,_249,_250,_0.02)),_linear-gradient(rgba(248,_249,_250,_0.02),_rgba(248,_249,_250,_0.02)),_rgba(248,_249,_250,_0.02)] [backdrop-filter:blur(50px)] flex flex-col items-start justify-center gap-[10px] text-left text-sm text-dimgray-100 font-inter border-b-[2px] border-solid border-gray-1000 sm:hidden sm:items-start sm:justify-start">
        <div className="relative bg-whitesmoke-600 [backdrop-filter:blur(50px)] box-border w-[1440px] h-[100px] z-[0] border-b-[1px] border-solid border-gray-1000" />
        <div className="my-0 mx-[!important] absolute top-[25px] left-[calc(50%_-_600px)] shrink-0 flex flex-row items-center justify-start gap-[239px] z-[1]">
          <div className="shrink-0 flex flex-row items-center justify-start gap-[35px]">
            <img
              className="relative rounded-xl w-[60px] h-[60px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/wi-artboard-13x20-5@2x.png"
            />
            <div className="shrink-0 flex flex-row items-start justify-start">
              <div
                className="shrink-0 flex flex-col items-start justify-center pt-[13px] pb-[15.5px] pr-[14.230003356933594px] pl-3.5 cursor-pointer"
                onClick={onItemContainerClick}
              >
                <div className="self-stretch relative leading-[16.5px]">
                  For brands
                </div>
              </div>
              <div className="shrink-0 flex flex-col items-start justify-center pt-[13px] pb-[15.5px] pr-[13.410003662109375px] pl-3.5 text-mini">
                <div className="self-stretch relative leading-[16.5px]">
                  For creators
                </div>
              </div>
              <div className="shrink-0 flex flex-col items-start justify-center pt-[13px] pb-[15.5px] pr-[13.5px] pl-3.5">
                <div className="self-stretch relative leading-[16.5px]">
                  Pricing
                </div>
              </div>
              <div className="shrink-0 flex flex-col items-start justify-center pt-[13px] pb-[15.5px] pr-[17.269996643066406px] pl-3.5 text-smi">
                <div className="self-stretch relative leading-[16.5px]">
                  Contact us
                </div>
              </div>
              <div className="shrink-0 flex flex-col items-start justify-center pt-[13px] pb-[15.5px] pr-[15.860000610351562px] pl-3.5 text-smi">
                <div className="self-stretch relative leading-[16.5px]">
                  Blogs
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 flex flex-row items-start justify-start gap-[28px]">
            <div
              className="self-stretch relative rounded-xl w-[124px] cursor-pointer"
              onClick={openLogin}
            >
              <img
                className="absolute top-[14px] left-[calc(50%_-_33.8px)] w-4 h-[17px] overflow-hidden object-cover"
                alt=""
                src="/svg@2x.png"
              />
              <div className="absolute top-[13.3px] left-[50.2px] leading-[16.5px]">
                Sign in
              </div>
            </div>
            <div className="shrink-0 flex flex-row items-start justify-start gap-[16px]">
              <button
                className="cursor-pointer [border:none] py-[13px] pr-[39.47999954223633px] pl-[38.52000045776367px] bg-white rounded-13xl shadow-[0px_0px_5px_rgba(255,_86,_162,_0.25)] w-[124px] shrink-0 flex flex-row items-center justify-center box-border"
                onClick={onLogin1Click}
              >
                <div className="relative text-sm leading-[16.5px] font-medium font-inter text-blueviolet-100 text-left">
                  Login
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-[13px] pr-[39.47999954223633px] pl-[38.52000045776367px] bg-hotpink-100 rounded-13xl shadow-[0px_0px_2px_rgba(255,_86,_162,_0.25)] w-[124px] shrink-0 flex flex-row items-center justify-center box-border">
                <div className="relative text-sm leading-[16.5px] font-medium font-inter text-white text-left">
                  Book a Demo
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isLoginOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogin}
        >
          <Login onClose={closeLogin} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
