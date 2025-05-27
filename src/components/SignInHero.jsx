import React from 'react';
import { Link } from "react-router";


function SignInHero() {
  return (
  <section className=" hidden md:flex flex-col justify-center items-center bg-[rgba(0,183,193,1)] h-screen  md:w-[40%] lg:w-[555px] ">
  <div className="flex flex-col justify-center items-center gap-16  w-[340px] ">
    <div className="flex flex-col justify-center items-center gap-6 font-semibold">
      <h2 className="text-white text-2xl md:text-4xl lg:text-5xl text-center ">
        New to<br/> SurveyLand? <br/>Sign up here!
      </h2>
      <p className="text-white text-md leading-loose ">Become part of our community</p>
    </div>
  </div>
  <Link to="/sign-up" className="flex justify-center items-center mt-4 bg-white py-3 px-5 w-[200px] h-[40px] rounded-3xl cursor-pointer">
    <span className="text-[rgba(0,183,193,1)] uppercase text-md font-bold">sign up</span>
  </Link>
  </section>

  );
}

export default SignInHero;
