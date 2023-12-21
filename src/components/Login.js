import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginFormContainer from "./LoginFormContainer";
import MainHeader from "./MainHeader";

const Login = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  
  return (
    <div className="relative bg-white w-[1440px] h-[1024px] max-w-full max-h-full overflow-auto">
      <div
        className="absolute bottom-[0px] left-[0px] [background:linear-gradient(99.77deg,_#823cff,_#fa9fed),_#fff] w-[1440px] h-[925px] cursor-pointer"
        onClick={onRectangleClick}
      />
      <LoginFormContainer />
      <MainHeader />
    </div>
  );
};

export default Login;
