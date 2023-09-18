"use client";
import UserPop from "@/components/UserPop";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Page() {
  const [storedPassword, setStoredPassword] = useState("");
  const [formData, setFormData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { handleSubmit, register } = useForm();
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem("loginData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData);
      setStoredPassword(parsedData.password);
    }
  }, []);

  const isNewUser = !formData.hasOwnProperty("Name");
  const [loginError, setLoginError] = useState(false);

  const onSubmit = (data) => {
    setFormData(data);
    localStorage.setItem("loginData", JSON.stringify(data));
    setIsLoggedIn(true);
  };
  const onLogin = (data) => {
    if (data.password === storedPassword) {
      setLoginError(false);
      setIsLoggedIn(true);
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="w-[100%] min-h-screen flex flex-col">
      <div className="w-[100%] h-[40vh] bg-slate-900 flex items-center px-[5rem] background ">
        <h2 className="text-[28px] text-white lg:text-[40px]">MY ACCOUNT</h2>
      </div>
      <div className="w-[100%] bg-gray-400 px-[2rem] p-[4rem] min-h-[100%] lg:px-[8rem]">
        <div className="text-[30px] font-[300] flex flex-col gap-4 text-black">
          <h2 className="mb-[3rem] font-[500] text-[40px]">
            {isNewUser ? "Sign Up" : "Login"}
          </h2>
        </div>
        <div className="">
          {isNewUser && (
            <form
              className="flex flex-col gap-4 text-black font-[400]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-4 text-black font-[400]">
                <label
                  className="text-[18px] text-gray-900 font-[900]"
                  id="label"
                  htmlFor="Name"
                >
                  Full Name
                </label>
                <input
                  className="py-[20px] px-[20px] bg-blue-200 text-black"
                  type="text"
                  placeholder="Full Name"
                  {...register("Name")}
                  required
                />
                <label
                  id="label"
                  htmlFor="Password"
                  className="text-[18px] text-gray-900 font-[900]"
                >
                  Enter password
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="py-[20px] px-[20px] bg-blue-200 text-black"
                  {...register("password")}
                  required
                />
              </div>
              <button
                className="bg-black py-4 text-white hover:bg-orange-500 transition-all"
                type="submit"
              >
                Signup
              </button>
            </form>
          )}
          {!isNewUser && (
            <form
              className="flex flex-col gap-4 text-black font-[400]"
              onSubmit={handleSubmit(onLogin)}
            >
              <label
                id="label"
                htmlFor="Password"
                className="text-[18px] text-gray-900 font-[900]"
              >
                Enter password
              </label>
              <input
                type="password"
                placeholder="password"
                className="py-[20px] px-[20px] bg-blue-200 text-black"
                {...register("password")}
                required
              />
              <button
                className="bg-black py-4 text-white hover:bg-orange-500 transition-all"
                type="submit"
              >
                Login
              </button>
            </form>
          )}
        </div>
        {loginError && (
          <p className="text-red-500 font-[800]">Password is incorrect.</p>
        )}
        {isLoggedIn && <UserPop userName={formData.Name} />}
      </div>
    </div>
  );
}
