import { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (media) => {
    media()
      .then((result) => {
        console.log(result.user);
        toast.success('Login Successfully')
        navigate(`/`)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <div className="divider">Continue With</div>
      <div>
        <button
          onClick={() => handleLogin(googleLogin)}
          className=" btn btn-sm btn-info w-full rounded-lg font-bold flex items-center"
        >
          <BsGoogle></BsGoogle>Login with Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
