import React, { useState, useEffect } from "react";
import { ProjectTableData } from "./ProjectTableData";
import { AiFillCloseSquare } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { InternsProfile } from "./InternsProfile";
import { Performances } from "./Performances";
export const LandingPage = () => {
  const [Project, setProject] = useState(false);

  const [intern, setIntern] = useState(false);

  const [performance, setPerformance] = useState(false);

  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [welcomeIMG, setWelcomeIMG] = useState("");

  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);

  const [pass, setPass] = useState(false);

  const showMenu = () => {
    setMenu((prev) => !prev);
  };
  const [menu, setMenu] = useState(false);

  const [submit, setSubmit] = useState(false);

  const submitHandler = () => {
    setSubmit(true);
    if (name.trim() === "") {
      setSubmit(false);
    }
    if (password.trim() === "") {
      setSubmit(false);
    }
    if (email.trim() === "") {
      setSubmit(false);
    }
    if (name && email && password) {
      setTimeout(() => {
        setWelcomeMessage(`Welcome ${name}!`);
        setWelcomeIMG("Images/img4.jpg");
      }, 1000);
    }
  };
  const closeWelcomeHandler = () => {
    setSubmit(false);

    setState({
      name: "",
      email: "",
      password: "",
    });
  };

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = state;

  const handleInput = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
    setError1("");
    setError2("");
    setError3("");
  };

  const projectHandler = () => {
    setProject((prev) => !prev);
    setIntern(false);
    setPerformance(false);
  };
  const internHandler = () => {
    setIntern((prev) => !prev);
    setProject(false);
    setPerformance(false);
  };
  const performanceHandler = () => {
    setPerformance((prev) => !prev);
    setProject(false);
    setIntern(false);
  };

  const showPassword = () => {
    setPass((prev) => !prev);
  };
  const reset = () => {
    setState({
      name: "",
      email: "",
      password: "",
    });
    setError1("");
    setError2("");
    setError3("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError1("   Please Fill out this space");
    } else {
      setError1("");
    }
    if (email.trim() === "") {
      setError2("   Please Fill out this space");
    } else {
      setError2("");
    }
    if (password.trim() === "") {
      setError3("   Please Fill out this space");
    } else {
      setError3("");
    }
    if (name && email && password) {
      console.log(state);
    } else {
      return;
    }
  };

  return (
    <div className="h-[300px] lg:w-full bg-[url('Images/img3.jpg')] bg-black/80  lg:bg-black/60 bg-left lg:bg-center bg-blend-overlay lg:h-[400px]">
      <header>
        <nav className=" flex justify-between mx-5 lg:mx-10 items-center h-full">
          <h1 className="font-bold lg:text-2xl text-sm text-white  pt-5 text ">
            REPORTS
          </h1>
          <div className="flex ml-40 sm:ml-72 md:ml-[670px] lg:hidden mr-5 mt-4 text-xl text-orange-500 cursor-pointer">
            <GiHamburgerMenu onClick={showMenu} />
          </div>
          <div className=" lg:flex">
            <ul
              className={`${
                menu
                  ? " flex flex-col absolute text-[12px] bg-black ml-[-230px] sm:ml-[-340px] mt-10 gap-5 px-10 sm:px-20 pt-10 pb-20"
                  : "hidden"
              } lg:flex lg:flex-row lg:gap-10  uppercase font-semibold text-white lg:text-[13px]`}
            >
              <button onClick={projectHandler}>
                {" "}
                <li className="hover:border-b transition duration-500 cursor-pointer text-orange-500">
                  {Project ? "CLOSE INFO" : "INFORMATION"}
                </li>{" "}
              </button>
              <button onClick={internHandler}>
                {" "}
                <li className="hover:border-b border-orange-500 transition duration-500 cursor-pointer">
                  {intern ? "CLOSE INTERNS" : "INTERNS"}
                </li>
              </button>

              <button onClick={performanceHandler}>
                {" "}
                <li className="hover:border-b transition border-orange-500 duration-500 cursor-pointer">
                  PERFORMANCES
                </li>
              </button>
            </ul>
          </div>
        </nav>
      </header>
      <div className="flex items-center justify-center mt-[70px] lg:mt-40 font-bold text text-[25px] lg:text-6xl text-shadow text-orange-500">
        <h1>
          INTERN-<span className="text-white ">GEE</span>
        </h1>
      </div>
      {intern && (
        <div>
          <InternsProfile />
        </div>
      )}
      {Project && (
        <div>
          <h1 className="mt-40 flex justify-center mb-7  text-black/80 font-bold text text-2xl">
            Interns Reports
          </h1>
          <div className=" flex justify-center bg-white/5 ">
            <ProjectTableData />
          </div>
        </div>
      )}
      {performance && (
        <div>
          <Performances />
        </div>
      )}
      <div className={`${submit ? "hidden" : "flex justify-center"}`}>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 mt-40 w-2/3 lg:w-2/4 mb-20"
        >
          <h1 className="text-orange-500 font-bold text-lg flex justify-center  lg:text-2xl text-shadow2 ">
            Sign Up Now.
          </h1>
          <input
            type="text"
            name="name"
            placeholder="Full Name "
            className="py-2 rounded-xl  px-10 outline-none shadow shadow-black/20"
            onChange={handleInput}
            value={name}
          />
          <p className="text-red-600 font-medium text-[12px] my-[-5px] py-0">
            {error1}
          </p>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="py-2 rounded-xl px-10 outline-none shadow shadow-black/20"
            onChange={handleInput}
            value={email}
          />
          <p className="text-red-600 font-medium text-[12px] my-[-5px] py-0">
            {error2}
          </p>
          <input
            type={pass ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="py-2 rounded-xl px-10 outline-none shadow shadow-black/20 relative"
            onChange={handleInput}
            value={password}
          />
          <button
            type="button"
            onClick={showPassword}
            className="absolute mt-[200px] lg:mt-[205px] cursor-pointer ml-[150px] sm:ml-[180px] lg:ml-[600px] font-bold text-[8px] sm:text-[10px] lg:text-[12px]"
          >
            {pass ? "Hide" : "Show"}
          </button>
          <p className="text-red-600 font-medium text-[12px] my-[-5px] py-0">
            {error3}
          </p>

          <div className=" flex flex-col gap-5 lg:flex lg:flex-row justify-between lg:gap-0 mx-10 text">
            <button
              type="button"
              onClick={reset}
              className="bg-black/60 lg:px-10 py-1 rounded-lg shadow-sm text-[12px] lg:text-[15px] shadow-black text-white lg:font-semibold"
            >
              {" "}
              Reset
            </button>
            <button
              type="submit"
              onClick={submitHandler}
              className="bg-black/60 lg:px-10 py-1 rounded-lg shadow-sm text-[12px] shadow-black text-white lg:font-semibold"
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
      <div className="mt-40 lg:mt-0 flex justify-center relative">
        {submit && (
          <AiFillCloseSquare
            onClick={closeWelcomeHandler}
            className="flex ml-72 lg:ml-[1200px] mt-80 lg:mt-0 cursor-pointer text-2xl lg:text-4xl lg:border-2 lg:shadow ld:shadow-black text-orange-600 absolute"
          />
        )}
        {submit && (
          <div className="flex flex-col duration-500 ">
            <h1 className="flex justify-center text-black/40 text2 tracking-tight text-shadow2 font-semibold text-lg lg:text-2xl">
              {welcomeMessage}
            </h1>
            <div className="mb-20 mt-5 2/4 flex justify-center">
              <figure className="w-[300px] lg:w-auto">
                <img src={welcomeIMG} className="rounded-2xl" />{" "}
              </figure>
            </div>
          </div>
        )}
      </div>{" "}
    </div>
  );
};
