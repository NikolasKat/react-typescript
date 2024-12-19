import { useForm, Resolver } from "react-hook-form";
import { Link } from "react-router-dom";

interface NewUserData {
   firstName?: string;
   lastName?: string;
   email?: string;
   password?: string | number;
}

const RegisterPage = () => {
   return (
      <div className="text-center pt-64">
         <h3 className="text-xl mt-5">
            or{" "}
            <Link to="/login" className="font-semibold ">
               Log in
            </Link>{" "}
            if you already have an account
         </h3>
      </div>
   );
};

export default RegisterPage;
