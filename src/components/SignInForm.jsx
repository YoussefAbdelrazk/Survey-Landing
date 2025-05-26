import React from 'react';

function SignInForm() {
  return (
    <section className="flex flex-1 flex-col justify-center items-center h-screen px-8">
      <h1 className="uppercase">sign in</h1>
      {/* logo  */}
      <div></div>
      <p>Or register using your email address</p>
      <form className="flex flex-col gap-4 w-full max-w-[400px]">
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-[rgba(0,183,193,1)] text-white py-2 rounded-lg hover:bg-[rgba(0,163,173,1)] transition-colors"
        >
          Sign In
        </button>
      </form>
    </section>
  );
}

export default SignInForm;
