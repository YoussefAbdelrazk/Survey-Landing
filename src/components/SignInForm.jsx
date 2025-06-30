import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa6";

function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef(null); // track assword input

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const togglePasswordVisibility = () => {
    const input = passwordRef.current;
    if (!input) return;

    const cursorPos = input.selectionStart;

    setShowPassword((prev) => !prev);

    // Re-focus and set cursor at correct position
    setTimeout(() => {
      input.focus();
      input.setSelectionRange(cursorPos, cursorPos);
    }, 0);
  };

  // Extract ref separately for password
  const { ref: passwordRegisterRef, ...passwordFieldProps } = register(
    "password",
    { required: "Password is required" }
  );

  return (
    <section className="flex flex-1 flex-col justify-center items-center gap-8 h-screen px-4">
      <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl font-bold text-primary-btn dark:text-primary-btn text-center">
        sign in
      </h1>

      {/* Icons */}
      <div className="flex gap-9 ">
        <img
          src="/google.svg"
          alt="Google"
          className="rounded-full border-6 border-white"
        />
        <img
          src="/github.svg"
          alt="GitHub"
          className="bg-white rounded-full border-white border-6"
        />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-4 w-full md:w-[408px]"
      >
        <p className="text-secondary-text dark:text-secondary-text  text-center">
          Or register using your email address
        </p>

        {/* Email Input */}
        <div className="w-full relative">
          <img
            src="/email.svg"
            alt="Email Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-diabled-text dark:text-diabled-text"
          />
          <input
            type="email"
            placeholder="Email"
            className="pl-10 rounded-lg px-4 py-2 w-full bg-disabled-back dark:bg-disabled-back focus:outline-none focus:ring-2 focus:ring-primary-btn dark:focus:ring-primary-btn"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="w-full relative">
          <img
            src="/lock.svg"
            alt="Lock Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-diabled-text dark:text-diabled-text"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="pl-10 rounded-lg px-4 py-2 w-full bg-disabled-back dark:disabled-back focus:outline-none focus:ring-2 focus:ring-primary-btn dark:focus:ring-primary-btn"
            {...passwordFieldProps}
            ref={(el) => {
              passwordRegisterRef(el);
              passwordRef.current = el;
            }}
          />
          <FaEyeSlash
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer text-disabled-text dark:text-disabled-text
"
            onMouseDown={(e) => e.preventDefault()}
            onClick={togglePasswordVisibility}
          />

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Remember Me + Forgot Password */}
        <div className="flex justify-between items-center w-full text-sm text-[rgba(98,99,108,1)]">
          <label className="flex items-center gap-2 text-secondary-text dark:text-secondary-text">
            <input
              type="checkbox"
              className="w-4 h-4 "
              {...register("rememberMe")}
            />
            Remember me
          </label>
          <a
            href="#"
            className="hover:underline text-primary-btn dark:text-primary-btn"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="flex justify-center items-center w-[200px] h-[40px] bg-[rgba(0,183,193,1)] py-3 px-5 rounded-full hover:bg-[rgba(0,163,173,1)] transition-colors cursor-pointer"
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
