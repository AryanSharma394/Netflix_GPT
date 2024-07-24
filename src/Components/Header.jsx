import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeuser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { toggleGptSearch } from "../utils/toggleslice";
import { changelanguage } from "../utils/configslice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const check = useSelector(store=> store.toggle.togglestate);


  const handlesearch = () => {
    dispatch(toggleGptSearch());
  };
  const handlelanguagechange = (e) => {
    dispatch(changelanguage(e.target.value));
    // console.log(e.target.value);
  };

  const handlesignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          adduser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeuser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="w-full absolute pl-10 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-center md:justify-between">
        <img
          className="w-44 mx-auto md:mx-0"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        ></img>
        {user && (
          <div className="flex p-2">
            {check && <select
              onChange={handlelanguagechange}
              className="p-2 m-2 bg-gray-900 bg-opacity-70 text-white rounded-lg"
            >
              <option value="en">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Spanish">Spanish</option>
            </select>}
            <button
              onClick={handlesearch}
              className="bg-gray-900 bg-opacity-70 py-2 text-white px-4 my-2 mx-4 rounded-lg"
            >
              {check ? "HomePage" : "Gpt Search"}
            </button>
            <img className="md:mt-1 mt-3 h-10 w-10 md:h-12 md:w-12 rounded md:ml-5 ml-20" alt="pfp" src="https://avatars.githubusercontent.com/u/123056214?v=4" />
            {
              <button
                onClick={handlesignout}
                className="text-white font-bold mb-6 "
              >
                (Sign-out)
              </button>
            }
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
