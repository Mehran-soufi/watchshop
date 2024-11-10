import React from "react";
import { VscSignIn } from "react-icons/vsc";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  conPass: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

function SignUp({ setSignIn }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      conPass: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="w-full h-full flex sm:flex-row flex-col justify-center items-center overflow-hidden">
      <motion.div
        className="sm:w-2/5 w-full sm:h-full h-3/5"
        initial={{
          opacity: 0,
          y: `100%`,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            ease: easeInOut,
            duration: 1.5,
            delay: 1.5,
          },
        }}
        exit={{
          opacity: 0,
          y: `-100%`,
          transition: {
            ease: easeInOut,
            duration: 1.5,
          },
        }}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="w-full h-full p-4 main-font flex justify-center items-center flex-col"
        >
          <div className="w-full mb-4">
            <label
              htmlFor="email"
              className="w-full text-slate-600 md:text-base text-sm"
            >
              Email Address:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-full border-none outline-none bg-slate-100 p-3 rounded-md lg:text-xl"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="w-full text-red-500 text-sm py-2">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="w-full mb-4">
            <label
              htmlFor="password"
              className="w-full text-slate-600 md:text-base text-sm"
            >
              Password:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
              className="w-full border-none outline-none bg-slate-100 p-3 rounded-md lg:text-xl"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="w-full text-red-500 text-sm py-2">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="w-full mb-4">
            <label
              htmlFor="conPass"
              className="w-full text-slate-600 md:text-base text-sm"
            >
              Confirm pass:
            </label>
            <input
              id="conPass"
              name="conPass"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.conPass}
              placeholder="Password"
              className="w-full border-none outline-none bg-slate-100 p-3 rounded-md lg:text-xl"
            />
            {formik.touched.conPass && formik.errors.conPass ? (
              <div className="w-full text-red-500 text-sm py-2">
                {formik.errors.conPass}
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full text-white lg:text-xl rounded-md p-3 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-700 mx-2 transition-all duration-75 hover:bg-gradient-to-r hover:from-pink-700 hover:via-violet-500 hover:to-cyan-500"
          >
            signup
          </button>
          <p className="w-full flex justify-center items-center text-slate-500 my-2 lg:text-base text-sm">
            Do You have an account?{" "}
            <span
              className="mx-2 cursor-pointer text-black"
              onClick={() => setSignIn(true)}
            >
              Sign in
            </span>
          </p>
        </form>
      </motion.div>
      <motion.div
        className="sm:w-3/5 sm:h-full w-full h-2/5 bg-gray-800 sm:rounded-e-xl rounded-ee-xl  flex flex-col justify-center items-center"
        initial={{
          opacity: 0,
          clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 30% 100%)",
        }}
        animate={{
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 30% 100%)",
          opacity: 1,
          transition: {
            ease: easeInOut,
            duration: 1.5,
            delay: 1.5,
          },
        }}
        exit={{
          opacity: 0,
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 100% 0)",
          transition: {
            ease: easeInOut,
            duration: 1.5,
          },
        }}
      >
        <p className="w-full flex flex-col justify-center items-center uppercase title-font lg:text-8xl sm:text-6xl text-4xl bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-700 text-transparent bg-clip-text">
          <VscSignIn className="text-slate-300" />
          Sign up
        </p>
      </motion.div>
    </div>
  );
}

export default SignUp;
