import React from "react";

function SignInForm() {
  return (
    <section className="flex flex-1 flex-col justify-center items-center gap-8 h-screen px-4">
      <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl font-bold text-[rgba(0,183,193,1)]">
        sign in
      </h1>
      {/* icons  */}
      <div className="flex gap-9">
        <img src="/google.svg" alt="Google" />
        <img src="/github.svg" alt="GitHub" />
      </div>
      <form className="flex flex-col items-center justify-center gap-4 w-full md:w-[408px]">
        <p className="text-[rgba(98,99,108,1)]">
          Or register using your email address
        </p>

        <div className="w-full relative">
          <img
            src="/email.svg"
            alt="Email Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"/>
          <input
            type="email"
            placeholder="Email"
            className="pl-10 rounded-lg px-4 py-2 w-full bg-[rgba(239,240,243,1)] focus:outline-none focus:ring-2 focus:ring-[rgba(0,183,193,1)] "
            required
          />
        </div>

        <div className="w-full relative">
          <img
            src="/lock.svg"
            alt="Lock Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
          <input
            type="password"
            placeholder="Password"
            className="pl-10 rounded-lg px-4 py-2 w-full bg-[rgba(239,240,243,1)]  focus:outline-none focus:ring-2 focus:ring-[rgba(0,183,193,1)]"
            required
          />
          <img
            src="/eye.svg"
            alt="Eye Icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
          />
        </div>

        {/* Remember me + Forgot password */}
        <div className="flex justify-between items-center w-full text-sm text-[rgba(98,99,108,1)]">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            Remember me
          </label>
          <a href="#" className="hover:underline text-[rgba(0,183,193,1)]">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="flex justify-center items-center w-[200px] h-[40px] bg-[rgba(0,183,193,1)]  py-3 px-5 rounded-full hover:bg-[rgba(0,183,193,1)] transition-colors cursor-pointer "
        >
          <span className="font-bold uppercase text-md text-white">
            sign in
          </span>
        </button>
      </form>
    </section>
  );
}

export default SignInForm;
