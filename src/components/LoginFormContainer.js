import { useCallback , useState} from "react";
import { useNavigate } from "react-router-dom";

const LoginFormContainer = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);


  const [email, setEmail] = useState('email');
  const [password, setPassword] = useState('password');
  const [confirmPassword, setConfirmPassword] = useState('')

  
  const handleInputChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Your registration logic goes here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };



  return (
    <div className="absolute top-[calc(50%_-_295px)] left-[calc(50%_-_357px)] rounded-xl bg-white w-[714px] flex flex-col items-start justify-start py-[50px] px-11 box-border gap-[28px] text-left text-mid text-black1 font-futura">
      <div className="flex flex-col items-start justify-start gap-[16px] md:flex md:hover:rounded-none">
        <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
          <div className="shrink-0 flex flex-row items-center justify-center gap-[20px]">
            <div className="relative tracking-[0.02em]">
              <span className="font-medium">Not registered</span>
              <span className="font-medium font-inter">?</span>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-mid leading-[110%] font-bold font-futura text-steelblue text-left inline-block">
              Sign up
            </button>
          </div>
          <div className="shrink-0 flex flex-col items-start justify-start text-22xl text-gray-600">
            <div className="shrink-0 flex flex-col items-start justify-start">
              <div className="relative tracking-[0.02em] leading-[60px] font-medium">
                Log in
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 flex flex-col items-start justify-start gap-[20px] text-base text-gray-900">
          <div className="rounded bg-gray-2 box-border w-[626px] h-[70px] flex flex-row items-center justify-start py-2 px-5 border-[1px] border-solid border-stroke">
            <div className="flex flex-col items-start justify-start">
            <input
              type="text"
              className="relative tracking-[0.02em] font-medium border-none bg-transparent focus:outline-none"
              value={email}
              onChange={handleInputChange}
           />
            </div>
          </div>
          <div className="w-[626px] flex flex-col items-start justify-start">
            <div className="rounded bg-gray-2 box-border w-[626px] h-[70px] flex flex-row items-center justify-start py-2 px-5 border-[1px] border-solid border-stroke">
              <div className="flex flex-col items-start justify-start">
              <input
              type="text"
              className="relative tracking-[0.02em] font-medium border-none bg-transparent focus:outline-none"
              value={password}
              onChange={handlePassword}
           />
              </div>
            </div>
          </div>
          <div className="w-[626px] flex flex-col items-start justify-start">
           
            <div className="rounded bg-gray-2 box-border w-[626px] h-[70px] flex flex-row items-center justify-start py-2 px-5 border-[1px] border-solid border-stroke">
              <div className="flex flex-col items-start justify-start">
              <input
              type="text"
              className="relative tracking-[0.02em] font-medium border-none bg-transparent focus:outline-none"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
           />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[176px] text-xs">
        <div className="shrink-0 flex flex-row items-center justify-start gap-[3px]">
          <img
            className="relative w-[21px] h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/materialsymbolscheckboxoutlineblank@2x.png"
          />
          <div className="relative tracking-[0.02em]">
            <span>
              <span className="font-medium">I accept Co. Name</span>
            </span>
            <span className="text-base text-hotpink-100">
              <span>
                <span className="font-arial">{` `}</span>
              </span>
              <span className="font-medium">{`Terms & Conditions`}</span>
            </span>
          </div>
        </div>
        <div className="relative text-base tracking-[0.02em] text-hotpink-100">
          <span className="font-medium">{`Forgot Password `}</span>
          <span className="font-medium font-poppins">?</span>
        </div>
      </div>
      <button
        className="cursor-pointer p-0 bg-blueviolet-100 relative rounded-21xl box-border w-[624px] h-[54px] border-[1px] border-solid border-lightgray-200"
        onClick={onFrameButtonClick}
      >
        <div onClick={handleSubmit} className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_67px)] text-2xl leading-[24px] font-medium font-futura text-white text-left">
          Log In
        </div>
        
      </button>
    </div>
  );
};

export default LoginFormContainer;
