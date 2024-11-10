import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { AnimatePresence } from "framer-motion";

function Register() {
  const [signIn, setSignIn] = useState(true);
  return (
    <div className="w-full h-[100vh] relative flex justify-center items-center">
      <div className="lg:w-3/4 w-11/12 sm:h-[70vh] h-[110vh] mx-auto border border-gray-800 rounded-2xl">
        <AnimatePresence>
          {signIn ? (
            <SignIn key="signIn" setSignIn={setSignIn} />
          ) : (
            <SignUp key="signUp" setSignIn={setSignIn} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Register;
