import { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { AuthContext } from "../provider/AuthProvider";

const SocialLogin = () => {
    const {user,googleLogin} = useContext(AuthContext);
    const handleLogin=(media)=>{
        media()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
  return (
    <>
      <div className="divider">Continue With</div>
      <div>
        <button onClick={()=>handleLogin(googleLogin)} className=" btn btn-sm btn-info w-full rounded-lg font-bold flex items-center">
           <BsGoogle></BsGoogle>Login with Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
