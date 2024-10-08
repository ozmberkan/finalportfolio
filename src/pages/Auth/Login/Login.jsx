import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginService } from "~/redux/slices/userSlice";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);

  const loginHandle = (data) => {
    try {
      dispatch(loginService(data));

      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-neutral-950 w-full flex-grow flex justify-center items-center">
      <div className="bg-neutral-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Giriş Yap</h2>
        <form className="space-y-6" onSubmit={handleSubmit(loginHandle)}>
          <div>
            <label
              className="block mb-2 text-sm font-medium  text-zinc-300"
              htmlFor="email"
            >
              eposta
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border text-white bg-transparent border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="eposta"
              {...register("email")}
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium  text-zinc-300"
              htmlFor="password"
            >
              parola
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border text-white bg-transparent border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="parola"
              {...register("password")}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            Giriş
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
