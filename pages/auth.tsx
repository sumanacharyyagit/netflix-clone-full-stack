import Input from "@/components/input";
import React, { useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVarient = useCallback(() => {
    setVariant((current) => (current === "login" ? "register" : "login"));
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-40">
        <nav className="px-4 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-60 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h1 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Create an account"}
            </h1>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id={"username"}
                  onChange={(e: any) => setUserName(e.target.value)}
                  value={userName}
                  label="Username"
                  type="text"
                />
              )}

              <Input
                id={"email"}
                onChange={(e: any) => setEmail(e.target.value)}
                value={email}
                label="Email"
                type="email"
              />
              <Input
                id={"password"}
                onChange={(e: any) => setPassword(e.target.value)}
                value={password}
                label="Password"
                type="password"
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === "register" ? "Signup" : "Login"}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === "register"
                ? "Already have an account?"
                : "First time using Netfix?"}
              <span
                onClick={toggleVarient}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "register" ? "Login" : "Create an account"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
