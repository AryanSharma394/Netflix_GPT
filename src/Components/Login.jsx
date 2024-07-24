import React, { useState, useRef } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignIn, setisSignIn] = useState(true);

  const [error, seterror] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handlesubmit = () => {
    //  console.log(email.current.value);
    // console.log(password.current.value);
    const checkvalid = validate(email.current.value, password.current.value);
    seterror(checkvalid);
    if (checkvalid) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/123056214?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                adduser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterror(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterror(errorCode + " " + errorMessage);
        });
    }
  };

  const handleSignIn = () => {
    setisSignIn(!isSignIn);
  };

  return (
    <>
      <Header />
      <div className='pt-20 md:pt-0 h-screen object-cover grid place-content-center bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg")]'>
        {/* // <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background-img" /> */}

        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black text-white w-[450px] h-[600px] p-12 space-y-6 bg-opacity-75 rounded"
        >
          <h1 className="text-3xl font-bold ">
            {isSignIn ? "Sign-In" : "Sign-Up"}
          </h1>
          <div className="space-y-4 ">
            {!isSignIn && (
              <input
                ref={name}
                className="p-5 w-full bg-gray-700 rounded outline-none"
                type="text"
                placeholder="Full-Name"
              />
            )}
            <input
              ref={email}
              className="p-5 w-full bg-gray-700 rounded outline-none"
              type="text"
              placeholder="Email-Address"
            />
            <input
              ref={password}
              className="p-5 w-full bg-gray-700 rounded outline-none"
              type="password"
              placeholder="Password"
            />
            <p className="text-red-500 p-2 font-semibold">{error}</p>
          </div>
          <button
            className="w-full bg-[#ff0000cd] p-4 rounded"
            type="submit"
            onClick={handlesubmit}
          >
            {isSignIn ? "Sign-In" : "Sign-Up"}
          </button>
          <p className="py-4 ml-2 cursor-pointer" onClick={handleSignIn}>
            {isSignIn
              ? "New to Netflix ? Sign Up"
              : "Already registered ? Sign-In now"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
