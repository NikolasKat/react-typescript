import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface MyForm {
   email: string;
   password: string | number;
}

function LoginPage() {
   return (
      <div className="text-center pt-64">
         <h3 className="text-xl mt-5">
            or{" "}
            <Link to="/register" className="font-semibold ">
               Register
            </Link>{" "}
            if you don`t have an account
         </h3>
      </div>
   );
}

export default LoginPage;
