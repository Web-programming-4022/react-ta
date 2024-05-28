import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import LoggedInUser from "../pages/WelcomePage";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);

  // & page rendering base on dependenicies
  useEffect(() => {
    if (isLogged === true) {
      navigate("/logged");
    }
  }, [isLogged]);

  //* conditional rendering

  //   if(isLogged){
  // return <LoggedInUser />
  //   }

  return <LoginForm isLogged={isLogged} setIsLogged={setIsLogged} />;
};

export default LoginPage;
