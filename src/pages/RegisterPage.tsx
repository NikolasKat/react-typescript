import { useForm, Resolver } from "react-hook-form";
import { Link } from "react-router-dom";

interface NewUserData {
   firstName: string;
   lastName: string;
   email: string;
   password: string | number;
}

const RegisterPage = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<NewUserData>();

   const onSubmit = handleSubmit((data) => console.log(data));

   return (
      <div className="text-center pt-64">
         <form onSubmit={onSubmit} className="max-w-sm mx-auto">
            <div className="mb-5">
               <label
                  htmlFor="name"
                  className="block mb-2 text-left text-xl font-medium text-gray-900 dark:text-white"
               >
                  Your name
               </label>
               <input
                  {...register("firstName", {
                     required: "Required",
                  })}
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="type your name"
               />
               {errors.firstName && errors.firstName.type}
            </div>
            <div className="mb-5">
               <label
                  htmlFor="surname"
                  className="block mb-2 text-left text-xl font-medium text-gray-900 dark:text-white"
               >
                  Your name
               </label>
               <input
                  {...register("lastName", {
                     required: "Required",
                  })}
                  type="text"
                  id="surname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="type your surname"
               />
               {errors.lastName && errors.lastName.type}
            </div>

            <div className="mb-5">
               <label
                  htmlFor="email"
                  className="block mb-2 text-left text-xl font-medium text-gray-900 dark:text-white"
               >
                  Your email
               </label>
               <input
                  type="email"
                  {...register("email", {
                     required: "Required",
                     pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                     },
                  })}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="youremail@something.com"
               />
               {errors.email && errors.email.type}
            </div>
            <div className="mb-5">
               <label
                  htmlFor="password"
                  className="block mb-2 text-left text-xl font-medium text-gray-900 dark:text-white"
               >
                  Your password
               </label>
               <input
                  type="password"
                  {...register("password", {
                     required: "Required",
                  })}
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="type your password"
               />
               {errors.password && errors.password.type}
            </div>
            <button
               type="submit"
               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
               Log in
            </button>
         </form>
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
