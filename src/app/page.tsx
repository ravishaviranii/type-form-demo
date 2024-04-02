"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Accordion from '@/components/Accordian';

const PasswordInput = ({ value, onChange }: any) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='relative mt-4 mb-2'>
      <input
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder="Password"
        className='shadow appearance-none border rounded w-[256px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
      <button
        onClick={togglePasswordVisibility}
        type="button"
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
      </button>
    </div>
  );
};


const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(true);
  const [isRegister, setisRegister] = useState(false)
  const [emailValid, setEmailValid] = useState(true);

  const handleEmailChange = (e: { target: { value: any; }; }) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(emailValue));
  };
  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };


  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      setValid(false);
      setEmailValid(false);
    } else {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      if (!passwordRegex.test(password)) {
        setValid(false);
      } else {
        setValid(true);
        // Do further processing, like sending the form data
      }
    }
  };
  return (
    <div id="__next">
      <div
        style={{
          visibility: 'hidden',
          position: 'fixed',
          top: 0,
          pointerEvents: 'none',
        }}
      >
        <a href="index.html">Signup</a>
      </div>
      <div data-testid="okta-signup-page">
        <div className="flex h-screen overflow-hidden">
          <section className=" min-h-[90vh] w-full bg-[#191919] text-[inherit]  flex-1 overflow-hidden hidden lg:flex">
            <div className="flex flex-col items-center justify-center h-full w-full">
              <h1 className="text-white text-3xl md:text-4xl font-normal my-0 mb-9 w-[366px] leading-[44px] md:leading-[56px] text-center">Sign up <br />and come on in</h1>
              <div>
                <Image
                  alt="Typeform product sample"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  role="presentation"
                  height={"299"}
                  width={"366"}
                  src="/product-sample@1x.webp"
                  className="w-full max-w-[366px] md:max-w-[432px]"
                />
              </div>
              <p className="text-white text-sm leading-5 absolute bottom-6">© Typeform</p>
            </div>
          </section>
          <section className="relative  bg-transparent text-[inherit]   rounded-l-md p-0 md:ml-[-16px] flex-1 grid overflow-auto h-full  ">
            <div className="bg-white relative w-full" style={{ display: "grid", gridTemplateColumns: " [first] 0 [second] auto", gridTemplateRows: "[first] 52px [second] auto [third] 52px" }}>
              <div className=" !pt-4 !pl-6 md:p-0 ">
                <div className="">
                  <button className="bg-transparent invisible md:visible   border-none p-0 !cursor-pointer outline-none flex items-center">
                    <div className="mr-2 leading-0">
                      <svg
                        height="17"
                        viewBox="0 0 20 20"
                        width="17"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z"
                          fill="#5E5E5E"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-gray-600 text-sm leading-6 font-normal hover:text-gray-400 hover:font-semibold ">English</span>
                    <div className="line-height-0 ml-2">
                      <svg
                        fill="none"
                        height="5"
                        viewBox="0 0 9 5"
                        width="9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M4.35156 2.80708L2.33394 0.789472C1.78653 0.24205 0.898985 0.242052 0.351563 0.789472L4.35156 4.78946L8.35156 0.789472C7.80411 0.242052 6.91658 0.242052 6.36917 0.789472L4.35156 2.80708Z"
                          fill="#5E5E5E"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-end items-center col-span-1 py-2 font-sans px-6">
                <p className="mr-2 mb-0 text-xs  sm:text-base">Already have an account?</p>
                <div className="flex flex-col items-stretch gap-4 md:gap-2 w-[167px]">
                  <a
                    href="#"
                    className="inline-block rounded-md cursor-pointer font-medium transition duration-200 ease-out text-center font-semibold w-full py-1 px-4 text-xs leading-normal border border-gray-700 hover:opacity-80"
                  >Log in</a>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center max-w-[256px] md:max-w-[546px] justify-self-center col-start-2 col-end-3 row-start-2 row-end-3">
                <div className="flex items-center justify-center h-[80px]">
                  <a
                    aria-label="Typeform"
                    href="https://www.typeform.com/"
                    title="Typeform"
                    target="_top"
                    className="line-height-0 no-underline hover:translate-x-0 focus:translate-x-0"
                  >
                    <div className="flex gap-[10px]"><svg xmlns="http://www.w3.org/2000/svg" width="33" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z" clip-rule="evenodd"></path></svg><span className=""><svg xmlns="http://www.w3.org/2000/svg" width="108" height="24" fill="none" className=""><path fill="currentColor" d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z"></path></svg></span></div>
                  </a>
                </div>
                <h2 className="font-light text-[24px] leading-36 text-gray-600 mb-4 text-center">
                  Get better data with conversational forms, surveys, quizzes
                  & more.
                </h2>
                {!isRegister ? <> <div data-testid="social-buttons" className="flex flex-col w-full justify-center items-center">
                  <div className=' border border-[#191919] mb-[15px] rounded-[10px] py-2  flex justify-around w-[256px]'>
                    <Image className='' src={"/google.png"} alt='Google' width={20} height={20} />
                    <a
                      target="_self"
                      data-qa="google-signin-btn"
                      data-se="social-auth-google-button"
                      data-testid="social-button"
                      href="https://auth.typeform.com/oauth2/default/v1/authorize?client_id=0oa1nigb1jQqJMb7f4x7&amp;idp=0oa1nic7hmTM5eytN4x7&amp;response_type=code&amp;scope=openid+email&amp;redirect_uri=https%3A%2F%2Fadmin.typeform.com%2Fauth%2Fokta%2Fcallback&amp;nonce=DrYzmAacdbjDMYJpydL43o&amp;state=SmjQpen9I4S9D4sual1dXJ"
                      className="font-semibold"
                    >Sign up with Google</a>
                  </div>
                  <div className='rounded-[10px] py-2 border border-[#191919]  flex justify-around w-[256px]'>
                    <Image className='' src={"/microsoft.png"} alt='Google' width={20} height={20} />
                    <a
                      target="_self"
                      data-qa="microsoft-signin-btn"
                      data-se="social-auth-microsoft-button"
                      data-testid="social-button"
                      href="https://auth.typeform.com/oauth2/default/v1/authorize?client_id=0oa1nigb1jQqJMb7f4x7&amp;idp=0oa3ms5jd9FloU2RI4x7&amp;response_type=code&amp;scope=openid+email&amp;redirect_uri=https%3A%2F%2Fadmin.typeform.com%2Fauth%2Fokta%2Fcallback&amp;nonce=7bRL1DEGd3w0QhznNvR4I0&amp;state=SmjQpen9I4S9D4sual1dXJ"
                      className="font-semibold"
                    >Sign up with Microsoft</a>
                  </div>
                </div>
                  <div className="my-[25px]">
                    <span className="text-[#5e5e5e]">OR</span>
                  </div>
                  <div className="rounded-[10px] py-2 border border-[#191919]  flex justify-around w-[256px] text-white bg-[#191919]">
                    <div className="">
                      <button
                        data-gtm-event="cta_button"
                        data-qa="user-friendly-cta"
                        className="font-semibold"
                        onClick={() => { setisRegister(!isRegister) }}
                      >
                        Sign up with email
                      </button>
                    </div>
                  </div>
                </> : <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center max-w-[256px]'>
                  <input
                    type="text"
                    className='shadow appearance-none border rounded w-[256px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email"
                  />
                  {!emailValid && <p className='text-red-600 text-sm mt-1 text-left w-full'>
                    Enter a valid email address
                  </p>}

                  <PasswordInput value={password} onChange={handlePasswordChange} />
                  {!valid && (
                    <p className='text-red-600 text-sm mt-1'>
                      Use 8 or more characters with a mix of letters, numbers and symbols
                    </p>
                  )}
                  <div className='flex'>
                    <input
                      type="checkbox"
                      id="agreement"
                      className=" w-[50px] h-[50px] mr-2 accent-black"
                    />
                    <label htmlFor="agreement">I agree to Typeform’s Terms of Service, Privacy Policy and Data Processing Agreement.</label>
                  </div>
                  <Accordion />

                  <button className=' py-2 border border-[#191919]  flex justify-around mt-4 w-[256px] text-white bg-[#191919]' type="submit">Create my free account</button>
                </form>
                }


              </div>
            </div >
          </section>
        </div>
      </div >
    </div >

  );
};

export default SignupPage;
