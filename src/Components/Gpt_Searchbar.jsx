import React, { useRef } from "react";
import language from "../utils/languageconstants";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_OPTIONS, GEMINI_API } from "../utils/constants";
import { GptResultMovies, GptMoviesName } from "../utils/toggleslice";

const Gpt_Searchbar = () => {
  const dispatch = useDispatch();
  const lang = useSelector((store) => store.config.lang);
  const searchtext = useRef(null);

  const searchmovie = async (movie) => {
    const api = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const data = await api.json();
    return data.results;
  };

  // const handlesubmit = async () => {
  // console.log(searchtext.current.value);

  //   const chatCompletion = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: gptQuery }],
  //     model: "gpt-3.5-turbo",
  //   });
  //   console.log(chatCompletion.choices);
  // };
  async function handlesubmit() {
    const gptQuery =
      "provide me with 5 recommendation of " +
      searchtext.current.value +
      "and make them comma separted for example Avengers,Don,Inception,Godfather,GoodFellas and only tell me the names of them no genre no nothing";

    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key="+GEMINI_API,
      method: "post",
      data: {
        contents: [{ parts: [{ text: gptQuery }] }],
      },
    });
    console.log(response.data.candidates[0].content.parts[0].text.split(","));

    const moviedata =
      response.data.candidates[0].content.parts[0].text.split(",");

    const data = moviedata.map((movie) => searchmovie(movie));

    const promisedata = await Promise.all(data);

    console.log(promisedata);

    dispatch(GptMoviesName(moviedata));
    dispatch(GptResultMovies(promisedata));
  }
  return (
    <div className="flex justify-center pt-[50%] md:pt-[10%] ">
      <form
        className="md:w-1/2 w-full grid grid-cols-12 bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchtext}
          className="p-4 m-4 col-span-9"
          placeholder={language[lang].placeholder}
        ></input>
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 rounded-lg"
          onClick={handlesubmit}
        >
          {language[lang].search}
        </button>
      </form>
    </div>
  );
};

export default Gpt_Searchbar;
